import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const userProtect = async (req, res, next) => {
    const token = req.cookies.auth_token;

    if (!token) {
        res.status(401).json({ msg: "Bad Request" });
    } else {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.user.id);

            if (!user) {
                res.status(401).json({ msg: "User not found" });
            } else {
                
                req.user = user._id.toString();
                next();
            }
        } catch (error) {
            res.status(401).json({ msg: 'Invalid token' });
        }
    }
};