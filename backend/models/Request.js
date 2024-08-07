import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user making the request
    skill: String, // skill/service requested
    description: String, // description of the request
    location: String, // location of the request
    pointsOffered: Number, // points offered for the service
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'] }, // status of the request
    acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user who accepted the request
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: Date,
    updatedAt: Date,
});

const Request = mongoose.model('Request', RequestSchema);

export default Request;