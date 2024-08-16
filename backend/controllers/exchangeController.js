import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import ServiceExchange from '../models/ServiceExchange.js';
import Service from '../models/Service.js';
import User from "../models/User.js"

export const createExchange=async (req,res)=>{

    await check('userId').run(req);
    await check('serviceId').run(req);
    await check('points').isInt({ min: 1, max: 100 }).run(req);

    const { userId, serviceId, points }=req.body;
    
const status="pending"
    if (!mongoose.Types.ObjectId.isValid(serviceId) || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid service or user ID' });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    try {
        const service = await Service.findById(serviceId)
        const serviceOwnerId = service.userId;
        if (serviceOwnerId==userId){
            return res.status(400).json({ msg: "You can't send offers to your own service." });
        }else{
            const exchange=await ServiceExchange.findOne({serviceId,userId,status:"pending"});

            if(exchange){
                return res.status(400).json({ msg: "Wait for response to last offer before sending another." });
            }else {
                await new ServiceExchange({ userId, serviceId, pointsOffered:points ,status }).save();
                return res.status(200).json({ msg: "Offer sent successfully." });
            }
        }
    } catch (error) {
        return res.status(400).json({msg:"Internal Server error"});
    }

}

export const updateExchangeStatus=async (req,res)=>{
    await check('exchangeId').run(req);
    await check('status').run(req);


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const { exchangeId,status }=req.body;

    if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
        return res.status(400).json({ error: 'Invalid Exchange Service ID' });
    }

    try {
        await ServiceExchange.findByIdAndUpdate(exchangeId,{status},{new:true})
        return res.status(200).json({ msg: "Status Change successful." });
    } catch (error) {
        return res.status(400).json({ msg: "Internal Server error" });
    }
}

export const deleteExchange=async (req,res)=>{
    await check('exchangeId').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { exchangeId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
        return res.status(400).json({ error: 'Exchange ID is invalid' });
    }

    try {
        await ServiceExchange.findByIdAndDelete(exchangeId);
        return res.status(200).json({ msg: "Exchange deleted successfully" });
    } catch (error) {
        return res.status(400).json({ msg: "Internal Server error" });
    }

}



export const acceptExchangeOffer=async (req,res)=>{
    await check('serviceOwnerId').run(req);
    await check('exchangerId').run(req);
    await check('exchangeId').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { serviceOwnerId, exchangerId, exchangeId }=req.body;

    if (!mongoose.Types.ObjectId.isValid(serviceOwnerId) || !mongoose.Types.ObjectId.isValid(exchangerId) || !mongoose.Types.ObjectId.isValid(exchangeId)) {
        return res.status(400).json({ error: 'Exchange ID is invalid' });
    }

    try {

            const exchanger = await User.findById(exchangerId);
            const serviceOwner = await User.findById(serviceOwnerId);
            const exchange = await ServiceExchange.findById(exchangeId);
            const serviceId = exchange.serviceId;
            const service = await Service.findById(serviceId);
            if (!(service && service.status == "active")) {
               return res.status(401).json({ msg: "Service is not active anymore." })
            }

            if (!exchanger || !serviceOwner || !exchange) {
                return  res.status(401).json({ msg: "Invalid request." })
            }

            const latestExchangerPoints = exchanger.points;

            const exchangeOfferedPoints = exchange.pointsOffered;

            if (latestExchangerPoints < exchangeOfferedPoints) {
                throw new Error('Insufficient points');
            }

            await Promise.all([
                User.findByIdAndUpdate(exchangerId, { $inc: { points: -exchangeOfferedPoints } }),
                User.findByIdAndUpdate(serviceOwnerId, { $inc: { points: +exchangeOfferedPoints } }),
                ServiceExchange.findByIdAndUpdate(exchangeId, { status: 'accepted' }),
            ]);
       return res.status(200).json({ msg: 'Exchange offer accepted' });
    } catch (error) {
        console.log(error)
      return  res.status(500).json({ msg: 'Error accepting exchange offer' });
    }
}

export const completeExchange=async (req,res)=>{

    await check('exchangeId').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
const {exchangeId}=req.body;
    const exchange = await ServiceExchange.findById(exchangeId);

    if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
        return res.status(400).json({ error: 'Exchange ID is invalid' });
    }

    try {
        if (exchange) {
            const serviceId = exchange.serviceId;
            const exchangerId = exchange.userId;
            await ServiceExchange.findByIdAndUpdate(exchangeId, { status: "completed" });
            await Service.findByIdAndUpdate(serviceId, { $addToSet: { exchanges: exchangeId } })
            await Service.findByIdAndUpdate(serviceId, { $addToSet: { reviewableBy: exchangeId   } })
            return res.status(200).json({ msg: "Exchange completed successfully." })
        } else {
            return res.status(401).json({ msg: "No Exchange found of that ID." })
        }
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" })
    }

}



