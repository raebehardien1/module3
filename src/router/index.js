import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ProductList from '../views/product.vue';
import ProductDetails from '../components/ProductPage.vue'




const routes = [
  { path: '/', component: Home },
  
  { path: '/productList', component: ProductList },
  { path: '/about', component: About },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/contact', component: Contact },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
