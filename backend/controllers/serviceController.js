import Service from "../models/Service.js";
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';


export const createService = async (req, res) => {
    await check('userId').run(req);
    await check('skills').isArray().run(req);
    await check('description').isLength({ min: 1, max: 500 }).run(req);
    await check('location').isLength({ min: 1, max: 20 }).run(req);
    await check('pointsRequired').isInt({ min: 1, max: 100 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { userId, skills, description, location, pointsRequired } = req.body;
    const status = "inactive";
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    try {
        const createdService = new Service({ userId, skills, description, location, pointsRequired, status, createdAt, updatedAt });
        await createdService.save(); 
        res.status(201).json({ msg: "Service created Successfully." }); // Changed to 201 Created
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const updateService=async (req,res)=>{

    await check('skills').isArray().run(req);
    await check('description').isLength({ min: 1, max: 500 }).run(req);
    await check('location').isLength({ min: 1, max: 20 }).run(req);
    await check('pointsRequired').isInt({ min: 1, max: 100 }).run(req);
    await check('serviceId').run(req);
    await check('status').run(req);


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const updatedAt = new Date().toISOString();

  

    const { serviceId,skills, description, location, pointsRequired,status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }

    try {
        const updatedService = await Service.findByIdAndUpdate(serviceId ,{ skills, description, location, pointsRequired, status, updatedAt }, { new: true })
        res.status(200).json({msg:"Service Updated Successfully."});
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}


export const deleteService = async (req, res) => {
    await check('serviceId').run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const { serviceId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }
    try {
        const deletedService = await Service.findOneAndDelete({ _id: serviceId })
        res.status(200).json({ msg: "Service Deleted Successfully." });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }

}