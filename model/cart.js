import { pool } from '../config/config.js';

// Get all cart items for a user
export const getCartItems = async (user_id) => {
    try {
        const [cartItems] = await pool.query(`
            SELECT 
                c.cart_id,
                c.product_id,
                c.quantity,
                c.total_amount,
                p.name AS product_name,
                p.price AS product_price
            FROM 
                cart c
            INNER JOIN 
                products p ON c.product_id = p.product_id
            WHERE 
                c.user_id = ?
        `, [user_id]);
        return cartItems;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

// Add item to cart
export const addToCart = async (user_id, product_id, quantity, total_amount) => {
    try {
        await pool.query(`
            INSERT INTO cart (user_id, product_id, quantity, total_amount)
            VALUES (?, ?, ?, ?)
        `, [user_id, product_id, quantity, total_amount]);
        return { message: 'Item added to cart successfully' };
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};

// Update cart item quantity
export const updateCartItem = async (cart_id, quantity, total_amount) => {
    try {
        await pool.query(`
            UPDATE cart 
            SET quantity = ?, total_amount = ?
            WHERE cart_id = ?
        `, [quantity, total_amount, cart_id]);
        return { message: 'Cart item updated successfully' };
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};

// Remove item from cart
export const removeFromCart = async (cart_id) => {
    try {
        await pool.query('DELETE FROM cart WHERE cart_id = ?', [cart_id]);
        return { message: 'Item removed from cart successfully' };
    } catch (error) {
        console.error('Error removing item from cart:', error);
        throw error;
    }
};

// Checkout (convert cart to order)
export const checkout = async (user_id) => {
    try {
        // Fetch cart items
        const [cartItems] = await pool.query('SELECT * FROM cart WHERE user_id = ?', [user_id]);
        if (cartItems.length === 0) {
            throw new Error('Cart is empty');
        }

        // Calculate total amount
        const total_amount = cartItems.reduce((total, item) => total + item.total_amount, 0);

        // Create an order
        const [order] = await pool.query(`
            INSERT INTO orders (user_id, total_amount)
            VALUES (?, ?)
        `, [user_id, total_amount]);

        const order_id = order.insertId;

        // Move cart items to order_details
        for (const item of cartItems) {
            await pool.query(`
                INSERT INTO order_details (order_id, product_id, quantity, price)
                VALUES (?, ?, ?, ?)
            `, [order_id, item.product_id, item.quantity, item.total_amount]);
        }

        // Clear the cart
        await pool.query('DELETE FROM cart WHERE user_id = ?', [user_id]);

        return { message: 'Checkout successful', order_id };
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error;
    }
};