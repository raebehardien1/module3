// Import connection
import { pool } from '../config/config.js';

// Getting all checkouts
export const getAllCheckouts = async () => {
  try {
    const [data] = await pool.query(`
      SELECT 
        checkout.checkout_id,
        checkout.card_number,
        checkout.expiry_date,
        checkout.cvv
      FROM 
        checkout;
    `);
    return data;
  } catch (error) {
    console.error('Error fetching checkouts:', error);
    throw error;
  }
};

// Getting a single checkout by ID
export const getSingleCheckout = async (checkout_id) => {
  try {
    const [data] = await pool.query('SELECT * FROM checkout WHERE checkout_id = ?', [checkout_id]);
    return data;
  } catch (error) {
    console.error('Error fetching one checkout:', error);
    throw error;
  }
};

// Adding a new checkout
export const insertCheckout = async (card_number, expiry_date, cvv) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO checkout (card_number, expiry_date, cvv) VALUES (?, ?, ?)',
      [card_number, expiry_date, cvv]
    );
    console.log('Checkout added successfully');
    return result.insertId; // Return the ID of the newly inserted checkout
  } catch (error) {
    console.error('Error adding checkout:', error);
    throw error;
  }
};

// Removing a checkout by ID
export const removeCheckout = async (checkout_id) => {
  try {
    const [result] = await pool.query('DELETE FROM checkout WHERE checkout_id = ?', [checkout_id]);
    console.log('Checkout deleted successfully');
    return result.affectedRows; // Return the number of rows affected
  } catch (error) {
    console.error('Error removing checkout:', error);
    throw error;
  }
};

// Editing a checkout by ID
export const editCheckout = async (checkout_id, card_number, expiry_date, cvv) => {
  try {
    const [result] = await pool.query(
      'UPDATE checkout SET card_number = ?, expiry_date = ?, cvv = ? WHERE checkout_id = ?',
      [card_number, expiry_date, cvv, checkout_id]
    );
    console.log('Checkout edited successfully');
    return result.affectedRows; // Return the number of rows affected
  } catch (error) {
    console.error('Error editing checkout:', error);
    throw error;
  }
};

// Searching for checkouts by card number (case-insensitive)
export const searchCheckouts = async (query) => {
  try {
    const [data] = await pool.query(
      'SELECT * FROM checkout WHERE card_number LIKE ?',
      [`%${query}%`]
    );
    return data;
  } catch (error) {
    console.error('Error searching checkouts:', error);
    throw error;
  }
};