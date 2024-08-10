import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "../backend/routes/users.js"
import adminRoutes from "../backend/routes/admin.js"
import serviceRoutes from "../backend/routes/service.js"
import rate_limiter from "./utils/rateLimiter.js";


dotenv.config();

const app=express();



app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(rate_limiter); 



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));




app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/service',serviceRoutes)



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));