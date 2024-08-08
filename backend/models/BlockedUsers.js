import mongoose from "mongoose";


const BlockedUserSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    email: {type: String, unique: true, required: true },
    block_date: { type:Date, required: true, },
    unblock_date: Date,
    block_reason: {
        type: String,
        required: true
    },
    block_status: {
        type: Boolean,
        default: false,
        required: true,
    },
    blocked_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})


const Blocked = mongoose.model('Blocked', BlockedUserSchema);
export default Blocked;