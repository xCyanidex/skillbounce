import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 100
    },
    date: {
        type: Date,
        default: Date.now
    },
    profile_img: {
        type: String,
        max: 100
    },
    city: {
        type: String,
        max: 100
    },
    bio: {
        type: String,
        max: 100
    },
    points: {
        type: Number
    },
    skills: [{
        type: String
    }],
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    location:{
        type:String,
        max:100
    },
    phone:{
        type:String,
        max:25,
    }
});

const User = mongoose.model('User', UserSchema);

export default User;