import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user making the offer
    skill: String, // skill/service offered
    description: String, // description of the offer
    location: String, // location of the offer
    pointsRequired: Number, // points required for the service
    status: { type: String, enum: ['active', 'inactive', 'completed'] }, // status of the offer
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }], // array of requests for this offer
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: Date,
    updatedAt: Date
});


const Offer = mongoose.model('Offer', OfferSchema);
export default Offer;