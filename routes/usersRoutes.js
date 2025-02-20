import { getAllusersCon, getSingleuserCon, insertuserCon, deleteuserCon, updateuserCon } from "../controller/usersCon.js";
import express from "express"

const router = express.Router()

router.get("/",getAllusersCon)
router.get("/:user_id",getSingleuserCon)
router.post("/",insertuserCon)
router.delete("/:user_id",deleteuserCon)
router.put("/:user_id",updateuserCon)

export default router