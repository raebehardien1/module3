import { getAllAdressesCon,getSingleAdressCon,insertAddressCon,updateAdressCon,deleteAdressCon } from "../controller/AddressCon.js" 
import express from "express"

const router = express.Router()

router.get("/",getAllAdressesCon)
router.get("/:adress_id",getSingleAdressCon)
router.post("/", insertAddressCon)
router.delete("/:adress_id", deleteAdressCon)
router.put("/:adress_id", updateAdressCon)

export default router