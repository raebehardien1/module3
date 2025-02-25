import { getAllusers, getSingleuser, insertuser, deleteuser, updateuser } from "../model/usersDb.js";

export const getAllusersCon = async (req, res) => {
    try {
       const results = await getAllusers();
       res.json(results);
    } catch (err) {
       res.status(500).send(err);
    }
 };
 

// get single catergory
// Controller for getting a single user
export const getSingleuserCon = async (req, res) => {
    try {
        const user_id = req.params.id; // Assuming the ID is in the URL params
        const user = await getSingleuser(user_id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};


//insert caatergory
export const insertuserCon = async (req, res) => {
    try {
        const { user_id } = req.body; // Get from request body
        if (!user_id) {
            return res.status(400).json({ message: "user name is required." });
        }

        // Call the insertuser function with the correct data
        const results = await insertuser(user_id);

        res.status(201).json({ message: "user inserted successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ message: "An error occurred while inserting the user." });
    }
};


export const deleteuserCon = async (req, res) => {
    try {
        const user_id = 5; 
        await deleteuser(user_id);

        res.json({
            message: `user with ID ${user_id} has been deleted.`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }
};



export const updateuserCon = async (req, res) => {
    try {
      
        const user_id = 5; // Replace 5 with the actual user ID you want to update
        const userData = {user_id };

        // Call the updateuser function and await the results
        await updateuser(user_id, userData);
        
        
        res.json({
            message: `user with ID ${user_id} has been updated.`,
        });

    } catch (err) {
        console.error(err);
        // Send error message if something goes wrong
        res.status(500).json({ message: 'An error occurred while updating the user.' });
    }
};
