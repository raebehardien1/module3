import express from 'express';
import {
    getCartCon,
    addItemToCartCon,
    updateItemInCartCon,
    removeItemFromCartCon,
    checkoutCartCon,
} from '../controller/CartCon.js';

const router = express.Router();

// Get cart items for a user
router.get('/', getCartCon);

// Add item to cart
router.post('/', addItemToCartCon);

// Update cart item quantity
router.put('/:cart_id', updateItemInCartCon);

// Remove item from cart
router.delete('/:cart_id', removeItemFromCartCon);

// Checkout (convert cart to order)
router.post('/checkout', checkoutCartCon);

export default router;