import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [],
      loading: false,
      error: null,
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  // In the Vuex store
// In the Vuex store
actions: {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('http://localhost:4500/products');
      const data = await response.json();
      
      // Check if the response has a products array
      if (data && Array.isArray(data.products)) {
        commit('setProducts', data.products);
      } else {
        console.error('Products data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
},


  getters: {
    products: (state) => state.products,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
});

export default store;

