import { pool } from "../config/config.js" 
import bcrypt from "bcrypt";

// get all user
 const getAllusers = async () => {
    try {
       const [results] = await pool.query("SELECT * FROM users");
       return results;
    } catch (err) {
       console.error(err);
       throw err;
    }
 };

// GET SINGLE user
const getSingleuser = async (user_id) => {
    try {
        console.log(`Running query to fetch user with ID: ${user_id}`); // Debugging log
        const [results] = await pool.query("SELECT * FROM users WHERE user_id = ?", [user_id]);

        if (results.length === 0) {
            console.log("User not found in database");
            return null; // Return `null` if user is not found
        }

        return results[0]; // ✅ Ensure we return a valid user object
    } catch (err) {
        console.error("Database error fetching user:", err);
        throw err;
    }
};


//insert user
 const insertuser = async (email,password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [results] = await pool.query("INSERT INTO hype.users (email , password)VALUES (?, ?) ",[email,hashedPassword]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// delete user
 const deleteuser = async (user_id) => {
    try {
        const sql = "DELETE FROM hype.users WHERE user_id = ?";
        const [results] = await pool.query(sql, [user_id]);
        return results;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// update user 
 const updateuser = async (user_id, {email,password}) => {
    try {
        const sql = "UPDATE hype.users SET email=? , password=? WHERE (user_id =?)";
        const [results] = await pool.query(sql, [email,password,user_id]);
        return results;0 
    } catch (err) {
        console.error(err);
        throw err;
    }
};

 const getUserByUsername = async (user_id, email, department) => {
    try {
        const [results] = await pool.query("SELECT * FROM users WHERE user_id = ? AND email = ? ", [user_id, email]);
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        return null;
    }
}; 
export default {getAllusers,getSingleuser,insertuser,deleteuser,updateuser,getUserByUsername}