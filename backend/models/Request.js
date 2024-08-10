import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user making the request
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, // service requested
    pointsOffered: Number, // points offered for the service
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'] }, // status of the request
    createdAt: Date,
    updatedAt: Date
});

const Request = mongoose.model('Request', RequestSchema);

export default Request;