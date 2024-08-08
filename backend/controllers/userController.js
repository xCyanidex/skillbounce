import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import {uploadProfileImage} from "../config/multer-config.js"
import mongoose from 'mongoose';
import { deleteFile } from '../utils/fileDelete.js';

export const registerUser =async (req, res) => {
  

    await check('name').isLength({ min: 5,max:10 }).run(req);
    await check('email').isEmail().run(req);
    await check('password').isLength({ min: 8,max:50 }).run(req);
    await check('confirmPassword').isLength({ min: 8, max: 50 }).run(req);


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array()  });
    }
    const { name, email, password, confirmPassword } = req.body;
    if(password!=confirmPassword){
        return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user =  new User({
            name,
            email,
            password,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.cookie('auth_token', token, {
                    httpOnly: true, // Server-only cookie
                    secure: true, // Only transmit over HTTPS
                    sameSite: 'strict', // Only allow same-site requests
                    maxAge: 3600000, // Cookie expires in 1 hour
                });
                res.json({ message: 'Registered!, Logged in successfully' });
                next()
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


export const loginUser = async (req, res,next) => {

    await check('email').isEmail().run(req);
    await check('password').isLength({ min: 8, max: 50 }).run(req);


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.cookie('auth_token', token, {
                    httpOnly: true, // Server-only cookie
                    secure: true, // Only transmit over HTTPS
                    sameSite: 'strict', // Only allow same-site requests
                    maxAge: 3600000, // Cookie expires in 1 hour
                });
                res.json({ message: 'Logged in successfully' });
                next()
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


export const getAllUsers= async (req,res)=>{
    try {
     const users=await User.find();
     if(users){
        res.status(200).json(users)
     } else {
         res.status(404).json({ message: 'No users found' });
     }
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });  
    }
}
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const user = await User.findById(id);
            if (!user) {
                res.status(404).json({ message: 'No user found' });
            } else {
                res.status(200).json(user);
            }
        } else {
            res.status(400).json({ message: 'User ID is required' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const userId=req.user;
    const { id } = req.params;
    if (userId != id){
        res.status(401).json({ msg: "Bad Request" });
    }else{
    uploadProfileImage.single('profileImg')(req, res, async (err) => {
        if (err) {
            res.status(404).json({ message: err });
        } else {
            const { file } = req;
            const { id } = req.params;
            const { name, skills, categories, bio, city, location, phone } = req.body;
            const categoriesObjectId = categories.map(category => mongoose.Types.ObjectId.createFromHexString(category));
            if (!name || !skills || !categoriesObjectId || !bio || !file || !city || !location || !phone) {
                res.status(400).json({ message: 'Please provide all the details' });
                return;
            }
            try {
                if (id) {
                    const user = await User.findById(id);
                    if (user) {
                        deleteFile(user.imageUrl)
                        const updatedUser = await User.findByIdAndUpdate(id, { ...req.body, imageUrl: file.filename }, { new: true });
                        res.status(200).json(updatedUser);
                    } else {
                        res.status(404).json({ message: 'No user found' });
                    }
                } else {
                    res.status(400).json({ message: 'User ID is required' });
                }
            } catch (error) {
                res.status(500).send({ message: 'Server error', error: error.message });
            }
        }
    });
}
};

export const logoutUser= async (req,res)=>{
    try {
        res.clearCookie('auth_token');
        res.status(200).json({ msg: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error logging out' });
    }
}
