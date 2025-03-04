import { getAlladminsCon, getSingleadminCon, insertadminCon, deleteadminCon, updateadminCon } from "../controller/adminCon.js";
import express from "express"

const router = express.Router()

router.get("/", getAlladminsCon);
router.get("/:admin_id", getSingleadminCon);
router.post("/", insertadminCon);
router.delete("/:admin_id", deleteadminCon);
router.put("/:admin_id", updateadminCon);

//comparing password    
router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking for the user 
        const user = await admin.findOne({ email });
        if (!admin) return res.status(400).json({ error: "Invalid email or password" });

        // Validating THE password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

        // token being created
        const token = jwt.sign(
            { admin_id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );


        res.json({ token, user: { admin_id: admin._id, email: admin.email } });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});



export default router 

