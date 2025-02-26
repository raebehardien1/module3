<template>
    <div class="home">
      <h1>Welcome to Hype</h1>
      <p>Discover the best refurbished and limited-edition sneakers.</p>
  
      <!-- Button to go to the product list -->
      <router-link to="/productList">
        <button class="shop-btn">Shop Now</button>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 50px;
  }
  .shop-btn {
    background: #ff4500;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }
  .shop-btn:hover {
    background: #cc3700;
  }
  </style>
  