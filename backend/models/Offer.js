import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user making the offer
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, // service offered
    pointsRequired: {type:Number,required:true}, // points required for the service
    status: { type: String, enum: ['accepted', 'declined', 'completed'] }, // status of the offer
    createdAt: Date,
    updatedAt: Date
});

const Offer = mongoose.model('Offer', OfferSchema);
export default Offer;