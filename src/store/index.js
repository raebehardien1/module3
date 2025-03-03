import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [],
      cart: [],
      loading: false,
      error: null,
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products || [];
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    addToCart(state, product) {
      const itemInCart = state.cart.find(item => item.product_id === product.product_id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.product_id !== productId);
    },
    updateQuantity(state, { productId, quantity }) {
      const itemInCart = state.cart.find(item => item.product_id === productId);
      if (itemInCart) {
        itemInCart.quantity = quantity;
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await fetch('http://localhost:3500/products');
        const data = await response.json();
        
        if (Array.isArray(data.products)) {
          commit('setProducts', data.products);
        } else {
          throw new Error(data.error || 'Invalid data format');
        }
      } catch (error) {
        commit('setError', error.message || 'Failed to fetch products');
        console.error('Error fetching products:', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    addToCart({ commit }, product) {
      console.log('Dispatching addToCart:', product);
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload);
    },
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    loading: (state) => state.loading,
    error: (state) => state.error,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
});

export default store;