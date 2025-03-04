<template>
    <div class="cart-view">
      <h2>Your Cart</h2>
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.product_id" class="cart-item">
          <img :src="getProductImage(item)" :alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">R{{ item.price }} x {{ item.quantity }}</p>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
               @change="updateQuantity(item.product_id, item.quantity)"  
               />
               <!-- come back to this  -->
            <button @click="removeFromCart(item.product_id)">Remove</button>
          </div>
        </div>
        <p class="total">Total: R{{ cartTotal }}</p>
        <button class="checkout-btn" @click ="goToCheckout">Proceed to Checkout</button>
        <button class="checkout-btn" @click="goBack">Continue shopping</button>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  const store = useStore();
  const router = useRouter();
  
  const cart = computed(() => store.state.cart);
  const cartTotal = computed(() => store.getters.cartTotal);
  
  const removeFromCart = (productId) => {
    store.dispatch('removeFromCart', productId);
  };
  
  const updateQuantity = (productId, quantity) => {
    store.dispatch('updateQuantity', { productId, quantity });
  };
  
  const getProductImage = (product) => {
    const imageName = product.name.toLowerCase().replace(/\s+/g, '_');
    try {
      return require(`@/assets/images/${imageName}.jpg`);
    } catch (error) {
      return require('@/assets/images/hype.png'); // Default image
    }
  };

  const goBack = () => {
  router.push('/productList');
};
  const goToCheckout = () => {
  router.push('/checkout');
};
  </script>
  
  <style scoped>
  .cart-view {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 16px;
  }
  .cart-item-details {
    flex-grow: 1;
  }
  .price {
    color: #ff5733;
    font-weight: bold;
  }
  input[type="number"] {
    width: 60px;
    margin-right: 10px;
  }
  button {
    background: #ff4500;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: #cc3700;
  }
  .total {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
  }
  .checkout-btn {
    background: #000;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
  }
  .checkout-btn:hover {
    background: #333;
  }
  </style>