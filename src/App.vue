<template>
  <div class="app-container">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/footerComp.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures full height of viewport */
}

.content {
  flex: 1; /* Pushes the footer down */
}
</style>
