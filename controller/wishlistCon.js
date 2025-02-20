// import model /query functions from catergory model
import {getAllSavedItems,getSingleSavedItem,insertWishlistItem,deleteWishListItem,updateWishlistItem} from "../model/wishlist"

export const getAllSavedItemsCon = async (req, res) => {
    try {
       const results = await getAllSavedItems();
       res.json(results);
    } catch (err) {
       res.status(500).send(err);
    }
 };
 

// get single catergory
// Controller for getting a single category
export const getSingleSavedItemCon = async (req, res) => {
    try {
        const wishlist_id = req.params.id; // Assuming the ID is in the URL params
        const wishlistItem = await getSingleSavedItem(wishlist_id);
        if (wishlistItem ) {
            res.json(wishlistItem );
        } else {
            res.status(404).json({ message: "wishlist Item  not found" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};


//insert caatergory
export const insertWishlistItemCon = async (req, res) => {
    try {
        const { user_id,product_id } = req.body; // Get from request body
        if (!user_id,product_id) {
            return res.status(400).json({ message: "Wish List item  is required." });
        }

        // Call the insertCategory function with the correct data
        const results = await insertWishlistItem(user_id,product_id);

        res.status(201).json({ message: "Category inserted successfully", id: results.insertId });
    } catch (err) {
        console.error("Error inserting wish list item:", err);
        res.status(500).json({ message: "An error occurred while inserting item." });
    }
};


export const deleteWishListItemCon = async (req, res) => {
    try {
        const wishlist_id = 5; 
        await deleteWishListItem(wishlist_id);

        res.json({
            message: `Item with ID ${wishlist_id} has been deleted.`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the item.' });
    }
};



export const updateWishlistItemCon = async (req, res) => {
    try {
      
        const wishlist_id = 5; // Replace 5 with the actual category ID you want to update
        const wishlistdata = {user_id,product_id};

        // Call the updateCategory function and await the results
        await updateWishlistItem(wishlist_id,wishlistdata);
        
        
        res.json({
            message: `Item with ID ${wishlist_id} has been updated.`,
        });

    } catch (err) {
        console.error(err);
        // Send error message if something goes wrong
        res.status(500).json({ message: 'An error occurred while updating the item.' });
    }
};
