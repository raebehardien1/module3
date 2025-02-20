// import  connection
import { pool } from "../config/config.js" 

// get all products
export const getAllAdresses = async () => {
    try {
       const [results] = await pool.query("SELECT * FROM addresses");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
 };
 
 

// GET SINGLE adress
export const getSingleAdress = async (adress_id) => {
    try {
        const [results] = await pool.query("SELECT * FROM addresses WHERE adress_id = ?", [adress_id]);
        return results[0]; // Return the single adress object
    } catch (err) {
        console.error(err);
        throw err; // Let the calling function handle the error
    }
};


//insert adress
export const insertAddress = async (user_id,adress_line1,adress_line2,city,zip_code) => {
    try {
       
        const [results] = await pool.query("INSERT INTO addresses(user_id,adress_line1,adress_line2,city,zip_code) VALUES (?,?,?,?,?)",[user_id,adress_line1,adress_line2,city,zip_code]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};



// delete adress
export const deleteAdress = async (adress_id) => {
    try {
        const sql = "DELETE FROM addresses WHERE adress_id = ?";
        const [results] = await pool.query(sql, [adress_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


// update catergory 
 
export const updateAdress = async (adress_id,adress_line1,adress_line2,city,zip_code) => {
    try {
        const sql = "UPDATE addresses SET adress_line1 = ?, adress_line2 = ? ,city = ?, zip_code = ? WHERE adress_id = ?";
        const [results] = await pool.query(sql, [adress_id,adress_line1,adress_line2,city,zip_code]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


