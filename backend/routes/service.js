import express from 'express';
import { createService } from '../controllers/serviceController.js';
import { userProtect } from '../middleware/user.js';


const router=express.Router();


router.post('/create',userProtect, createService)


export default router;