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
        console.error(error); // Log the actual error
        res.status(500).json({ msg: "Internal Server Error" });
    }
};