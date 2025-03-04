import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import users from "../model/usersDb.js"; 

export const loginUser = async (email, password) => {
    try {
        // Check if user exists
        const user = await users.findOne({ email });
        if (!user) return { success: false, error: "Invalid email or password" };

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return { success: false, error: "Invalid email or password" };

        // Generate token
        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return { success: true, token, user: { user_id: user._id, email: user.email } };
    } catch (error) {
        return { success: false, error: "Server error" };
    }

    
};

export const registerUser = async (req, res) => { 
    try {
        const { email, password } = req.body; // ✅ Correct way
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({ email, password: hashedPassword });

        await newUser.save();

        return res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Server error" });
    }
};

