// import  connection
import { pool } from "../config/config.js" 

// get all products
export const getAllCategories = async () => {
    try {
       const [results] = await pool.query("SELECT * FROM catergories");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
 };
 
 

// GET SINGLE category
export const getSingleCategory = async (category_id) => {
    try {
        const [results] = await pool.query("SELECT * FROM catergories WHERE category_id = ?", [category_id]);
        return results[0]; // Return the single category object
    } catch (err) {
        console.error(err);
        throw err; // Let the calling function handle the error
    }
};


//insert category
export const insertCategory = async (catergory_name) => {
    try {
        // const sql = "INSERT INTO catergories SET catergory_name = ?",[catergory_name];
        const [results] = await pool.query("INSERT INTO hype.catergories SET catergory_name = ?",[catergory_name]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};



// delete category
export const deleteCategory = async (category_id) => {
    try {
        const sql = "DELETE FROM catergories WHERE category_id = ?";
        const [results] = await pool.query(sql, [category_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


// update catergory 
 
export const updateCatergory = async (category_id, categoryData) => {
    try {
        const sql = "UPDATE catergories SET ? WHERE category_id = ?";
        const [results] = await pool.query(sql, [categoryData, category_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


