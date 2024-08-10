import Blocked from '../models/BlockedUsers.js';
import User from '../models/User.js';


export const deleteUser = async (req, res) => {

    await check('id').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }
    const { id } = req.body;
    try {
        const deletedUser = await User.findByIdAndDelete({ _id: id })
        if (deletedUser) {
            res.status(200).json({ msg: 'User deleted Successfully' })
        } else {
            res.status(400).json({ msg: 'User not found' })
        }
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

export const blockUser = async (req, res) => {

    await check('blocked_by').run(req);
    await check('block_reason').run(req);
    await check('blocked_by').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { blockId, block_reason, blocked_by } = req.body;
    const block_status = true;
    const block_date = Date.now();

    try {
        const blockedUser = await User.findById(blockId);
        if (!blockedUser) {
            return res.status(400).json({ msg: "User not found." });
        }

        const alreadyBlockedUser = await Blocked.findOne({ user_id: blockedUser._id });
        if (alreadyBlockedUser) {
            const updatedBlock = await Blocked.findByIdAndUpdate(alreadyBlockedUser._id, { block_date, block_reason, block_status, blocked_by }, { new: true });
            return res.status(200).json(updatedBlock);
        }

        const newBlock = await Blocked.create({ user_id: blockedUser._id, email: blockedUser.email, block_date, block_reason, block_status, blocked_by });
        return res.status(200).json(newBlock);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};


export const unblockUser= async (req,res)=>{

    await check('id').run(req);
    await check('block_reason').run(req);
    await check('blocked_by').run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ Invalid_Input_error: errors.array() });
    }

    const { id, block_reason, blocked_by } = req.body;
    const block_date=Date.now();
    const block_status= false;
    try {
        const blockId = await Blocked.findById(id);
        if (blockId){
            const updatedUser = await Blocked.findByIdAndUpdate(blockId, { block_date, block_reason, block_status, blocked_by },{new:true});
            res.status(200).json(updatedUser);
        }else{
            res.status(400).json({ msg: "No Blocked User found." })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
