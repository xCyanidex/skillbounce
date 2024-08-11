import express from "express";
import { createExchange, updateExchangeStatus } from "../controllers/exchangeController.js";


const router=express.Router();



router.post('/create',createExchange)
router.put('/state-update',updateExchangeStatus)


export default router;