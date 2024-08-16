import express from "express";
import { createReview, deleteReview, updateReview } from "../controllers/reviewController.js";
import { userProtect } from "../middleware/user.js";

const router=express.Router();

router.post('/create',userProtect,createReview);
router.put('/update', userProtect,  updateReview);
router.delete('/delete',userProtect,deleteReview)

export default router;