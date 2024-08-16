import { check, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import ServiceExchange from '../models/ServiceExchange.js';
import Review from '../models/Review.js';
import Service from "../models/Service.js";

export const createReview = async (req, res) => {
    await check('exchangeId').run(req);
    await check('rating').isInt({ min: 1, max: 5 }).run(req);
    await check('comment').isString().isLength({ max: 200 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const { exchangeId, rating, comment } = req.body;
    if (!mongoose.Types.ObjectId.isValid(exchangeId)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }

    try {
        const exchange = await ServiceExchange.findById(exchangeId);
        if (!exchange) {
            return res.status(400).json({ error: 'Resource not found.' });
        } else {
            const serviceId = exchange.serviceId;
            const exchangerId = exchange.userId;
            const service = await Service.findById(serviceId);
            if (!service) {
                return res.status(400).json({ error: 'Resource not found.' });
            } else {
                const reveiewables = service.reviewableBy;
                const reviewableBy = reveiewables.includes(exchangeId)
                if (!reviewableBy) {
                    return res.status(400).json({ error: 'You are not allowed to post a review for this service.' });
                } else {
                    const reviewedBy = service.reviewedBy;
                    const ifItsReviewedAlready = reviewedBy.includes(exchangeId)
                    if (ifItsReviewedAlready) {
                        return res.status(400).json({ error: 'You are already reviewed for this service.' });
                    } else {
                        const reviewExists = await Review.findOne({ exchangeId });
                        if (!reviewExists) {
                           const review= await new Review({ serviceId, userId: exchangerId, exchangeId, rating, comment }).save();
                           const reviewId=review._id;
                            await Service.findByIdAndUpdate(serviceId, { $push: { reviews: reviewId, reviewedBy: exchangerId }})
                            return res.status(200).json({ msg: "Review posted Successfully." })
                        } else {
                            return res.status(400).json({ error: 'You already posted a review for this exchange.' });
                        }
                    }
                }
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal Server Error.' });
    }
}


export const updateReview=async (req,res)=>{

    await check('reviewId').run(req);
    await check('exchangeId').run(req);
    await check('userId').run(req);
    await check('rating').isInt({ min: 1, max: 5 }).run(req);
    await check('comment').isString().isLength({ max: 200 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { exchangeId, userId, reviewId, comment, rating }=req.body;
    const loggedInUser=req.user;
    console.log(loggedInUser);

    if (!mongoose.Types.ObjectId.isValid(exchangeId) || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    if (loggedInUser != userId) {
        return res.status(400).json({ msg: 'You are not allowed to make that request.' });
    }
    try {
        await Review.findOneAndUpdate({ _id: reviewId, exchangeId, userId }, { $set: { rating, comment } },)
        return res.status(200).json({ msg: 'Review updated successfully.' });
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
}


export const deleteReview=async (req,res)=>{
    await check('reviewId').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const { reviewId }=req.body;
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    try {
        const review = Review.findById(reviewId);
        const serviceId=review.serviceId;
        const exchangerId=review.userId;
        await Service.findByIdAndUpdate(serviceId, {
            $pullAll: {
                reviews: [reviewId],
                reviewedBy: [exchangerId]
            }
        });
        await Review.findByIdAndDelete(reviewId);
        return res.status(200).json({ msg: 'Review deleted successfully.' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Internal Server Error' }); 
    }

}