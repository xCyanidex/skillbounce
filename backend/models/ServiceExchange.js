import mongoose from "mongoose";


const ServiceExchangeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, 
    pointsOffered: {type:Number,required:true}, 
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'] }, 
    createdAt: Date,
    updatedAt: Date
});

const ServiceExchange = mongoose.model('ServiceExchange', ServiceExchangeSchema);

export default ServiceExchange;