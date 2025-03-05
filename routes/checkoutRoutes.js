import express from 'express';
import {
  getAllCheckoutsCon,
  getSingleCheckoutCon,
  insertCheckoutCon,
  editCheckoutCon,
  removeCheckoutCon,
  searchCheckoutsCon,
} from '../controller/checkoutCon.js';

const router = express.Router();

// Routes for checkouts
router.get('/checkouts', getAllCheckoutsCon); // Get all checkouts
router.get('/checkouts/:checkout_id', getSingleCheckoutCon); // Get a single checkout
router.post('/checkouts', insertCheckoutCon); // Add a new checkout
router.put('/checkouts/:checkout_id', editCheckoutCon); // Edit a checkout
router.delete('/checkouts/:checkout_id', removeCheckoutCon); // Delete a checkout
router.get('/checkouts/search', searchCheckoutsCon); // Search checkouts

export default router;