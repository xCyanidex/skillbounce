import express from 'express';
import { createService, deleteService, updateService } from '../controllers/serviceController.js';
import { userProtect } from '../middleware/user.js';


const router=express.Router();


router.post('/create', createService)

router.post('/update',updateService);

router.delete('/delete',deleteService)


export default router;