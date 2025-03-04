import { pool } from "../config/config.js" 
import bcrypt from "bcrypt";

// get all user
 const getAlladmin= async () => {  // ✅ Rename to match the import
    try {
       const [results] = await pool.query("SELECT * FROM admin");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
};


// GET SINGLE user
const getSingleadmin = async (admin_id) => {
    try {
        console.log(`Running query to fetch admin with ID: ${admin_id}`); // Debugging log
        const [results] = await pool.query("SELECT * FROM hype.admin WHERE admin_id = ?", [admin_id]);

        if (results.length === 0) {
            console.log("Admin not found in database");
            return null; 
        }

        return results[0]; 
    } catch (err) {
        console.error("Database error fetching admin:", err);
        throw err;
    }
};



//insert user
const insertadmin = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [results] = await pool.query(
            "INSERT INTO hype.admin (email, password) VALUES (?, ?)", 
            [email, hashedPassword]
        );
        return results;
    } catch (err) {
        console.error("Error inserting admin:", err);
        throw err;
    }
};

// delete user
const deleteadmin = async (admin_id) => {
    try {
        const sql = "DELETE FROM hype.admin WHERE admin_id = ?";
        const [results] = await pool.query(sql, [admin_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// update user 
const updateadmin = async (admin_id, { email, password }) => {
    try {
        let hashedPassword = password;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        
        const sql = "UPDATE hype.admin SET email = ?, password = ? WHERE admin_id = ?";
        const [results] = await pool.query(sql, [email, hashedPassword, admin_id]);
        
        return results;
    } catch (err) {
        console.error("Error updating admin:", err);
        throw err;
    }
};


const getadmindbyadmin = async (admin_id, email) => {
    try {
        const [results] = await pool.query("SELECT * FROM admin WHERE admin_id = ?  AND email = ? ", [admin_id, email]);
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        return null;
    }
}; 

export default {getAlladmin,getSingleadmin,insertadmin,deleteadmin,updateadmin,getadmindbyadmin}
