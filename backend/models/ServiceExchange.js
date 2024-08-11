import mongoose from "mongoose";


const ServiceExchangeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user making the exchange
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, // service exchanged
    pointsOffered: {type:Number,required:true}, // points offered or requested
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'] }, // status of the exchange
    createdAt: Date,
    updatedAt: Date
});

const ServiceExchange = mongoose.model('ServiceExchange', ServiceExchangeSchema);

export default ServiceExchange;