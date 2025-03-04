import {getAllSavedItemsCon,getSingleSavedItemCon,deleteWishListItemCon,updateWishlistItemCon,insertWishlistItemCon  } from "../controller/wishlistCon.js";
import express from "express"

const router = express.Router()

router.get("/",getAllSavedItemsCon)
router.get("/:category_id",getSingleSavedItemCon)
router.post("/",insertWishlistItemCon)
router.delete("/:category_id",deleteWishListItemCon)
router.put("/:category_id",updateWishlistItemCon)

export default router