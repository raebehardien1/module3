import bcrypt from`bcryptjs`
import {pool} from '../config/config.js' 

// Register a new user
export const registerUser = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (user_id,email, password) VALUES (?, ?,?)";
        await pool.query(query, [ user_id,email, hashedPassword]);
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};



