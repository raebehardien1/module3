<template>
    <div>
      <!-- Header -->
      <header class="moving-header">
        <p>Get free shipping for orders over R4000 when you create an account with us using your email</p>
      </header>
      
      <!-- Product Section -->
      <div class="product-container">
        <!-- Product Images -->
        <div class="product-image">
          <img :src="selectedImage" alt="Product Image">
          <div class="image-gallery">
            <img v-for="(image, index) in images" :key="index" :src="image" @click="changeImage(image)">
          </div>
        </div>
        
        <!-- Product Details -->
        <div class="product-details">
          <p>Adidas</p>
          <h1>Adidas Campus 00s</h1>
          <p class="price">R 1399.99 ZAR</p>
          <p class="product-title">Adidas Campus 00s "Black & White" sneakers</p>
          
          <h3>Highlights</h3>
          <ul>
            <li>Thick tongue and collar for a cushioned fit.</li>
            <li>Provides excellent grip and durability.</li>
            <li>Works with both casual and streetwear outfits.</li>
            <li>Classic 2000s skate shoe aesthetic with a chunky silhouette.</li>
          </ul>
          
          <p>Select Size:</p>
          <div class="size-grid">
            <button v-for="size in sizes" :key="size" @click="selectSize(size)" :class="{ selected: selectedSize === size }">
              {{ size }}
            </button>
          </div>
          
          <div class="quantity">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" v-model="quantity" min="1" max="5">
          </div>
          
          <!-- Buttons -->
          <div class="buttons">
            <button class="add-to-cart">Add to Cart</button>
            <button class="buy-now">Buy Now</button>
          </div>
          
          <div class="delivery-estimation">
            <p>ESTIMATED DELIVERY</p>
            <p>Mar 11 - Mar 14</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImage: "https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg",
        images: [
          "https://i.pinimg.com/736x/5b/49/55/5b49555767a251a391dfd642ee2c91e9.jpg",
          "https://i.pinimg.com/736x/aa/f9/e1/aaf9e1524a356ffebdcb908370880b3b.jpg",
          "https://i.pinimg.com/736x/30/51/a0/3051a034d1c16d8c5cf64d63e092a965.jpg",
          "https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg"
        ],
        sizes: [3, 5, 6, 7, 9, 11],
        selectedSize: null,
        quantity: 1,
      };
    },
    methods: {
      changeImage(imageUrl) {
        this.selectedImage = imageUrl;
      },
      selectSize(size) {
        this.selectedSize = size;
      }
    }
  };
  </script>
  
  <style scoped>
  .moving-header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 8px 0;
  }
  .product-container {
    display: flex;
    background: white;
    padding: 20px;
    border-radius: 20px;
  }
  .product-image img {
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
    cursor: pointer;
  }
  .image-gallery img {
    width: 70px;
    height: 70px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
  }
  .size-grid button {
    padding: 10px;
    border: none;
    background: #ddd;
    cursor: pointer;
    border-radius: 5px;
  }
  .size-grid button.selected {
    background: orangered;
    color: white;
  }
  .add-to-cart {
    background: orangered;
    color: white;
  }
  .buy-now {
    background: black;
    color: white;
  }
  </style>
  