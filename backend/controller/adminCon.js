import adminDb from "../model/adminDb.js";
const { getAlladmin, getSingleadmin, insertadmin, deleteadmin, updateadmin } = adminDb;

export const getAlladminsCon = async (req, res) => { 
    try {
        console.log("Fetching all admins..."); 

        const results = await getAlladmin(); 

        console.log("Fetched admins:", results); 

        res.json({ admin: results });
    } catch (err) {
        console.error("Error fetching admins:", err);
        res.status(500).json({ message: "An error occurred while fetching admins." });
    }
};

// get single catergory
// Controller for getting a single admin
export const getSingleadminCon = async (req, res) => {
    try {
        const { admin_id } = req.params; // Ensure admin_id is extracted
        console.log(`Fetching admin with ID: ${admin_id}`); // Debugging log

        if (!admin_id) {
            return res.status(400).json({ message: "Admin ID is required" });
        }

        const admin = await getSingleadmin(admin_id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.json(admin);
    } catch (err) {
        console.error("Error fetching admin:", err);
        res.status(500).json({ message: "An error occurred while fetching the admin." });
    }
};


//insert catergory
export const insertadminCon = async (req, res) => {
    try {
        const { admin_id , email , password} = req.body; // Get from request body
        if (!admin_id) {
            return res.status(400).json({ message: "admin name is required." });
}

// Call the insertadmin function with the correct data
        const results = await insertadmin(email,password);
        res.status(201).json({ message: "admin inserted successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting admin:", err);
        res.status(500).json({ message: "An error occurred while inserting the admin." });
    }
};

//delete
export const deleteadminCon = async (req, res) => {
    try {
        const { admin_id } = req.params; // ✅ Extract from request parameters

        if (!admin_id) {
            return res.status(400).json({ message: "admin ID is required." });
        }

        await deleteadmin(admin_id);

        res.json({
            message: `admin with ID ${admin_id} has been deleted.`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while deleting the admin." });
    }
};

// console.log(await deleteadmin(5));

export const updateadminCon = async (req, res) => {
    try {
      
        const {admin_id } = req.params;
        // Call the updateadmin function and await the results
        await updateadmin(admin_id, req.body);
        res.json({
            message: `admin with ID ${admin_id} has been updated.`,
        });
    } catch (err) {
        console.error(err);
        // Send error message if something goes wrong
        res.status(500).json({ message: 'An error occurred while updating the admin.' });
    }
};
