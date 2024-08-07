import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user who wrote the review
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' }, // request being reviewed
    rating: { type: Number, min: 1, max: 5 }, // rating (1-5)
    comment: String, // review comment
    createdAt: Date,
    updatedAt: Date
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;