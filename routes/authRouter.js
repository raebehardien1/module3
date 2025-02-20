import express from "express";
// import { loginCon, registerCon } from "../controller/authCon.js";
const router = express.Router();
router.post("/register", registerCon);  
router.post("/login", loginCon);
export default router 