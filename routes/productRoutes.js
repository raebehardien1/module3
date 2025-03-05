//import from controller
import {getAllProductsCon,getSinglProductCon,InsertProductCon,removeProductCon,editProductlCon, searchProductsCon } from "../controller/ProductCon.js";
import express from "express"

const router = express.Router()

router.get("/",getAllProductsCon)
router.get("/search", searchProductsCon); // Search route
router.get("/:product_id",getSinglProductCon)
router.post("/",InsertProductCon)
router.delete("/:product_id",removeProductCon)
router.put("/:product_id",editProductlCon)

export default router