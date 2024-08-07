import dotenv from "dotenv";
import mongoose from 'mongoose';
import User from "../models/User.js";
import Category from '../models/Category.js';
import Request from '../models/Request.js';
import Offer from '../models/Offer.js';
import Review from '../models/Review.js';


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


async function deleteData() {
try {
    await User.deleteMany({}, { force: true });
    await Category.deleteMany({});
    await Request.deleteMany({});
    await Offer.deleteMany({});
    await Review.deleteMany({});
    console.log('Data deleted!');   
} catch (error) {
    console.log(error);
}
}

deleteData().then(() => mongoose.disconnect());