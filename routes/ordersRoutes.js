import { getAllOrdersCon,getSingleOrderCon,InsertOrderCon,removeOrderCon,editOrderCon } from "../controller/ordersCon.js" 
import express from "express"

const router = express.Router()

router.get("/",getAllOrdersCon)
router.get("/:order_id",getSingleOrderCon)
router.post("/",InsertOrderCon)
router.delete("/:order_id",removeOrderCon)
router.put("/:order_id",editOrderCon)

export default router