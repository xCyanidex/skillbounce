import express from "express";
import { acceptExchangeOffer, completeExchange, createExchange, deleteExchange, updateExchangeStatus } from "../controllers/exchangeController.js";
import { userProtect } from "../middleware/user.js";


const router=express.Router();



router.post('/create',userProtect,createExchange)
router.put('/state-update', userProtect, updateExchangeStatus)
router.delete('/delete', userProtect, deleteExchange);
router.post('/accept', userProtect, acceptExchangeOffer)
router.post('/complete', userProtect, completeExchange)


export default router;