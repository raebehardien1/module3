import { pool } from "../config/config.js" 

// get all products
export const getAllusers = async () => {
    try {
       const [results] = await pool.query("SELECT * FROM users");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
 };
 
 

// GET SINGLE category
export const getSingleuser = async (category_id) => {
    try {
        const [results] = await pool.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
        return results[0]; // Return the single category object
    } catch (err) {
        console.error(err);
        throw err; // Let the calling function handle the error
    }
};


//insert category
export const insertuser = async (user_id) => {
    try {
        // const sql = "INSERT INTO catergories SET catergory_name = ?",[catergory_name];
        const [results] = await pool.query("INSERT INTO hype.users SET user_id = ?",[user_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};



// delete category
export const deleteuser = async (user_id) => {
    try {
        const sql = "DELETE FROM users WHERE user_id = ?";
        const [results] = await pool.query(sql, [user_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


// update catergory 
 
export const updateuser = async (user_id, userData) => {
    try {
        const sql = "UPDATE users SET ? WHERE user_id = ?";
        const [results] = await pool.query(sql, [userData, user_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

