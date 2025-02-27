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
      state.products = products || [];
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await fetch('http://localhost:3500/products');
        const data = await response.json();
        
        // Check if the response is valid
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
  },
  getters: {
    products: (state) => state.products,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
});

export default store;
