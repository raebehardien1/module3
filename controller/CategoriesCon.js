// import model /query functions from catergory model
import {getAllCategories,getSingleCategory,insertCategory,deleteCategory,updateCatergory} from "../model/categories.js"

export const getAllCategoriesCon = async (req, res) => {
    try {
       const results = await getAllCategories();
       res.json(results);
    } catch (err) {
       res.status(500).send(err);
    }
 };
 

// get single catergory
// Controller for getting a single category
export const getSingleCategoryCon = async (req, res) => {
    try {
        const category_id = req.params.id; // Assuming the ID is in the URL params
        const category = await getSingleCategory(category_id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

//insert catergory
export const insertCategoryCon = async (req, res) => {
    try {
        const { catergory_name } = req.body; // Get from request body
        if (!catergory_name) {
            return res.status(400).json({ message: "Category name is required." });
        }

        // Call the insertCategory function with the correct data
        const results = await insertCategory(catergory_name);

        res.status(201).json({ message: "Category inserted successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting category:", err);
        res.status(500).json({ message: "An error occurred while inserting the category." });
    }
};

// deleting category
export const deleteCategoryCon = async (req, res) => {
    try {
        const category_id = 5; 
        await deleteCategory(category_id);

        res.json({
            message: `Category with ID ${category_id} has been deleted.`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the category.' });
    }
};


// updating category
export const updateCategoryCon = async (req, res) => {
    try {
      
        const category_id = 5; // Replace 5 with the actual category ID you want to update
        const categoryData = {catergory_name };

        // Call the updateCategory function and await the results
        await updateCatergory(category_id, categoryData);
        
        
        res.json({
            message: `Category with ID ${category_id} has been updated.`,
        });

    } catch (err) {
        console.error(err);
        // Send error message if something goes wrong
        res.status(500).json({ message: 'An error occurred while updating the category.' });
    }
};
