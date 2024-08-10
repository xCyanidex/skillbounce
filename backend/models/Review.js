import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, // service being reviewed
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user leaving the review
    rating: { type: Number, min: 1, max: 5 }, // rating (1-5)
    comment: String, 
    createdAt: Date,
    updatedAt: Date
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;