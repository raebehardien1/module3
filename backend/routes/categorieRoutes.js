//import from controller
import { getAllCategoriesCon,getSingleCategoryCon,insertCategoryCon,deleteCategoryCon,updateCategoryCon } from "../controller/CategoriesCon.js";
import express from "express"

const router = express.Router()

router.get("/",getAllCategoriesCon)
router.get("/:category_id",getSingleCategoryCon)
router.post("/",insertCategoryCon)
router.delete("/:category_id",deleteCategoryCon)
router.put("/:category_id",updateCategoryCon)

export default router