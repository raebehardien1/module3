import {
    getCartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    checkout,
} from '../model/cart.js';

// Get cart items for a user
export const getCartCon = async (req, res) => {
    try {
        const user_id = req.user.id; // Assuming you have user authentication
        const cartItems = await getCartItems(user_id);
        res.json({ cartItems });
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'An error occurred while fetching cart items' });
    }
};

// Add item to cart
export const addItemToCartCon = async (req, res) => {
    try {
        const { product_id, quantity } = req.body;
        const user_id = req.user.id;

        // Fetch product price from the database
        const [product] = await pool.query('SELECT price FROM products WHERE product_id = ?', [product_id]);
        if (!product.length) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const price = product[0].price;
        const total_amount = quantity * price;

        // Add item to cart
        const result = await addToCart(user_id, product_id, quantity, total_amount);
        res.json(result);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'An error occurred while adding item to cart' });
    }
};

// Update cart item quantity
export const updateItemInCartCon = async (req, res) => {
    try {
        const { cart_id } = req.params;
        const { quantity } = req.body;

        // Fetch product price from the database
        const [cartItem] = await pool.query('SELECT product_id FROM cart WHERE cart_id = ?', [cart_id]);
        if (!cartItem.length) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        const product_id = cartItem[0].product_id;
        const [product] = await pool.query('SELECT price FROM products WHERE product_id = ?', [product_id]);
        const price = product[0].price;
        const total_amount = quantity * price;

        // Update cart item
        const result = await updateCartItemCon(cart_id, quantity, total_amount);
        res.json(result);
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ error: 'An error occurred while updating cart item' });
    }
};

// Remove item from cart
export const removeItemFromCartCon = async (req, res) => {
    try {
        const { cart_id } = req.params;
        const result = await removeFromCart(cart_id);
        res.json(result);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'An error occurred while removing item from cart' });
    }
};

// Checkout (convert cart to order)
export const checkoutCartCon = async (req, res) => {
    try {
        const user_id = req.user.id;
        const result = await checkout(user_id);
        res.json(result);
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'An error occurred during checkout' });
    }
};