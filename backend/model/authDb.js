import bcrypt from`bcryptjs`
import {pool} from '../config/config.js' 

// Register a new user
export const registerUser = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (email, password) VALUES (?, ?)";
        await pool.query(query, [ email, hashedPassword]);
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};

export const loginUser = async (email, password) => {
    try {
        const query = "SELECT * FROM users WHERE email = ?";
        const [users] = await pool.query(query, [email]);

        if (users.length === 0) {
            return { success: false, error: "User not found" };
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return { success: false, error: "Invalid password" };
        }

        return { success: true, message: "Login successful", user };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};


