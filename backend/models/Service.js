import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // user offering the service
    skills: [{type:String}], // skill/service offered
    description: {type:String,max:500,min:1}, // description of the service
    location: {type:String,min:1,max:20}, // location of the service
    pointsRequired: {type:Number,required:true}, // points required for the service
    status: { type: String, enum: ['active', 'inactive', 'completed'] }, // status of the service
    reviewableBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // users who can review this service
    reviewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // users who have reviewed this service
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // array of review IDs
    createdAt: Date,
    updatedAt: Date,
    exchanges:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'ServiceExchange'
    }]
});


const Service = mongoose.model('Service', ServiceSchema);
export default Service;