//import from controller
import { getAllPaymentCon,getSinglePaymentCon,InsertPaymentCon,removePaymentCon,ediPaymentCon } from "../controller/paymentCon.js";
import express from "express"

const router = express.Router()

router.get("/",getAllPaymentCon)
router.get("/:payment_id",getSinglePaymentCon)
router.post("/",InsertPaymentCon)
router.delete("/:payment_id",removePaymentCon)
router.put("/:payment_id",ediPaymentCon)

export default router