import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import ServiceExchange from '../models/ServiceExchange.js';
import Service from '../models/Service.js';

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