import express from 'express';
import { createService, deleteService, updateService } from '../controllers/serviceController.js';
import { userProtect } from '../middleware/user.js';


const router=express.Router();


router.post('/create',userProtect, createService)

router.post('/update',userProtect,updateService);

router.delete('/delete',deleteService)


export default router;