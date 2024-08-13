import express from "express";
import { acceptExchangeOffer, completeExchange, createExchange, deleteExchange, updateExchangeStatus } from "../controllers/exchangeController.js";


const router=express.Router();



router.post('/create',createExchange)
router.put('/state-update',updateExchangeStatus)
router.delete('/delete',deleteExchange);
router.post('/accept',acceptExchangeOffer)
router.post('/complete',completeExchange)


export default router;