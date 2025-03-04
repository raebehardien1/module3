import { getAllusersCon, getSingleuserCon, insertuserCon, deleteuserCon, updateuserCon } from "../controller/usersCon.js";
import express from "express"
import users from "../model/usersDb.js"

const router = express.Router()

router.get("/",getAllusersCon)
router.get("/:user_id",getSingleuserCon)
router.post("/",insertuserCon)
router.delete("/:user_id",deleteuserCon)
router.put("/:user_id",updateuserCon)

//comparing password    
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking for the user 
        const user = await users.findOne({ email }); // ✅ Correct reference
        if (!user) return res.status(400).json({ error: "Invalid email or password" });

        // Validating THE password
        const isMatch = await bcrypt.compare(password, user.password); // ✅ Use `user.password`
        if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

        // token being created
        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token, user: { user_id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});



export default router 

