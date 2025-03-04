import { getAllOrderDetailsCon,getSingleOrderDetailCon,InsertOrderDetailCon,editOrderDetailCon,removeOrderDetailCon } from "../controller/Order_detailsCon.js" 
import express from "express"

const router = express.Router()

router.get("/",getAllOrderDetailsCon)
router.get("/:category_id",getSingleOrderDetailCon)
router.post("/",InsertOrderDetailCon)
router.delete("/:category_id",removeOrderDetailCon)
router.put("/:category_id",editOrderDetailCon)

export default router