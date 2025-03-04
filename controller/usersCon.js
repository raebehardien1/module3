import usersDb from "../model/usersDb.js";
const { getAllusers, getSingleuser, insertuser, deleteuser, updateuser } = usersDb;

export const getAllusersCon = async (req, res) => {
    try {console.log();
       const results = await getAllusers();
       res.json({user: results});
    } catch (err) {
       res.status(500).send(err);
    }
 };

// get single catergory
// Controller for getting a single user
export const getSingleuserCon = async (req, res) => {
    try {
        const { user_id } = req.params; // ✅ Ensure you're using the correct param key
        console.log(`Fetching user with ID: ${user_id}`); // Debugging log

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await getSingleuser(user_id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user); // ✅ Return the user object
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "An error occurred while fetching the user." });
    }
};

//insert caatergory
export const insertuserCon = async (req, res) => {
    try {
        const { user_id , email , password} = req.body; // Get from request body
        if (!user_id) {
            return res.status(400).json({ message: "user name is required." });
}

// Call the insertuser function with the correct data
        const results = await insertuser(email,password);

        res.status(201).json({ message: "user inserted successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ message: "An error occurred while inserting the user." });
    }
};

//delete

export const deleteuserCon = async (req, res) => {
    try {
        const { user_id } = req.params; // ✅ Extract from request parameters

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required." });
        }

        await deleteuser(user_id);

        res.json({
            message: `User with ID ${user_id} has been deleted.`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while deleting the user." });
    }
};

// console.log(await deleteuser(5));

export const updateuserCon = async (req, res) => {
    try {
      
        const {user_id } = req.params;
        // Call the updateuser function and await the results
        await updateuser(user_id, req.body);
        
        
        res.json({
            message: `user with ID ${user_id} has been updated.`,
        });
    } catch (err) {
        console.error(err);
        // Send error message if something goes wrong
        res.status(500).json({ message: 'An error occurred while updating the user.' });
    }
};
