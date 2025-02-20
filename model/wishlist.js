// import  connection
import { pool } from "../config/config.js" 

// get all products
export const getAllSavedItems = async () => {
    try {
       const [results] = await pool.query("SELECT * FROM wishlist_items ");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
 };
 
 

// GET SINGLE category
export const getSingleSavedItem = async (wishlist_id) => {
    try {
        const [results] = await pool.query("SELECT * FROM wishlist_items WHERE wishlist_id = ?", [wishlist_id]);
        return results[0]; // Return the single category object
    } catch (err) {
        console.error(err);
        throw err; // Let the calling function handle the error
    }
};


//insert category
export const insertWishlistItem = async () => {
    try {
        
        const [results] = await pool.query("INSERT INTO wishlist_items(user_id,product_id) VALUES (?,?)", [user_id,product_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};



// delete category
export const deleteWishListItem = async (wishlist_id) => {
    try {
        const sql = "DELETE FROM wishlist_item WHERE wishlist_id = ?";
        const [results] = await pool.query(sql, [wishlist_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


// update catergory 
 
export const updateWishlistItem= async (wishlist_id,user_id,product_id) => {
    try {
        const sql = "UPDATE wishlist_item SET user_id =? , product_id ? WHERE wishlist_id = ?";
        const [results] = await pool.query(sql, [wishlist_id,user_id,product_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


