import express from 'express';
import { blockUser, deleteUser, unblockUser } from '../controllers/adminController.js';



const router=express.Router();


router.post('/block',blockUser)

router.delete('/delete', deleteUser);

router.put('/unblock',unblockUser)


export default router;