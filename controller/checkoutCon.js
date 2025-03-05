// Importing checkout functions from the model
import {
    getAllCheckouts,
    getSingleCheckout,
    insertCheckout,
    removeCheckout,
    editCheckout,
    searchCheckouts,
  } from '../model/checkout.js';
  
  // All checkouts controller
  export const getAllCheckoutsCon = async (req, res) => {
    try {
      res.json({ checkouts: await getAllCheckouts() });
    } catch (error) {
      console.error('Error fetching checkouts:', error);
      res.status(500).json({ error: 'An error occurred while fetching checkouts' });
    }
  };
  
  // Getting a single checkout controller
  export const getSingleCheckoutCon = async (req, res) => {
    try {
      const checkout = await getSingleCheckout(req.params.checkout_id);
      if (checkout) {
        res.json({ oneCheckout: checkout });
      } else {
        res.status(404).json({ error: 'Checkout not found' });
      }
    } catch (error) {
      console.error('Error fetching checkout:', error);
      res.status(500).json({ error: 'An error occurred while fetching the checkout' });
    }
  };
  
  // Inserting a checkout controller
  export const insertCheckoutCon = async (req, res) => {
    const { card_number, expiry_date, cvv } = req.body;
    try {
      const checkoutId = await insertCheckout(card_number, expiry_date, cvv);
      res.status(201).json({ message: 'Checkout added successfully', checkoutId });
    } catch (error) {
      console.error('Error adding checkout:', error);
      res.status(500).json({ error: 'An error occurred while adding the checkout' });
    }
  };
  
  // Editing a checkout controller
  export const editCheckoutCon = async (req, res) => {
    const { checkout_id } = req.params;
    const { card_number, expiry_date, cvv } = req.body;
    try {
      const affectedRows = await editCheckout(checkout_id, card_number, expiry_date, cvv);
      if (affectedRows > 0) {
        res.json({ message: 'Checkout edited successfully' });
      } else {
        res.status(404).json({ error: 'Checkout not found' });
      }
    } catch (error) {
      console.error('Error editing checkout:', error);
      res.status(500).json({ error: 'An error occurred while editing the checkout' });
    }
  };
  
  // Removing a checkout controller
  export const removeCheckoutCon = async (req, res) => {
    const { checkout_id } = req.params;
    try {
      const affectedRows = await removeCheckout(checkout_id);
      if (affectedRows > 0) {
        res.json({ message: 'Checkout deleted successfully' });
      } else {
        res.status(404).json({ error: 'Checkout not found' });
      }
    } catch (error) {
      console.error('Error removing checkout:', error);
      res.status(500).json({ error: 'An error occurred while removing the checkout' });
    }
  };
  
  // Searching checkouts controller
  export const searchCheckoutsCon = async (req, res) => {
    const query = req.query.query || '';
    try {
      const checkouts = await searchCheckouts(query);
      res.json({ checkouts });
    } catch (error) {
      console.error('Error searching checkouts:', error);
      res.status(500).json({ error: 'An error occurred while searching for checkouts' });
    }
  };