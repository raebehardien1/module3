<template>
  <div v-if="product" class="product-details">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p class="price">Price: R{{ product.price }}</p>
    <p class="category">Category : {{ product.catergory_name }}</p>
    <button class="buy-btn" @click="addToCart(product)">Add to Cart</button>
    <button class="back-btn" @click="goBack">Back to Products</button>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

onMounted(() => {
  store.dispatch('fetchProducts'); // Fetch products on mount
});

const productId = computed(() => Number(route.params.id));

const product = computed(() => {
  return store.state.products.find(p => p.product_id === productId.value);
});

const addToCart = (product) => {
  console.log('Adding to cart:', product);
  store.dispatch('addToCart', product);
  router.push('/cart')
};

const goBack = () => {
  router.push('/productList');
};
</script>


<style scoped>
.product-details {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff4500;
}
.category {
  font-size: 0.9rem;
  color: gray;
}
.buy-btn,
.back-btn {
  background: #000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
}
.buy-btn:hover {
  background: #333;
}
.back-btn {
  background: #777;
}
.back-btn:hover {
  background: #555;
}
</style>
