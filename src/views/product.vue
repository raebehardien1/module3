<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.product_id" class="product-card">
      <img :src="getProductImage(product)" :alt="product.name" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p class="price">R{{ product.price }}</p>
      <button @click="goToProduct(product.product_id)">View More</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onMounted(async () => {
  await store.dispatch('fetchProducts'); // Ensure data is fetched
});

const products = computed(() => store.state.products || []);

const goToProduct = (productId) => {
  router.push(`/product/${productId}`);
};

const getProductImage = (product) => {
  const imageName = product.name.toLowerCase().replace(/\s+/g, '_');
  try {
    return require(`@/assets/images/${imageName}.jpg`);
  } catch (error) {
    return require('@/assets/images/hype.png'); // Default image
  }
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px;
}
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: white;
}
.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.price {
  color: #ff5733;
  font-weight: bold;
}
button {
  background: #ff4500;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background: #cc3700;
}
</style>
