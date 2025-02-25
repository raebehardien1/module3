<template>
    

    <header>
        <p>Get free shipping for orders over R4000 when you create an account with us using your email</p>
    </header>

    <!-- Product Section -->
    <div class="product-container">
        <!-- Product Images -->
        <div class="product-image">
            <img id="mainImage" src="https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg" alt="Product Image">
            <div class="image-gallery">
                <img src="https://i.pinimg.com/736x/5b/49/55/5b49555767a251a391dfd642ee2c91e9.jpg" onclick="changeImage('https://i.pinimg.com/736x/5b/49/55/5b49555767a251a391dfd642ee2c91e9.jpg')">
                <img src="https://i.pinimg.com/736x/aa/f9/e1/aaf9e1524a356ffebdcb908370880b3b.jpg" onclick="changeImage('https://i.pinimg.com/736x/aa/f9/e1/aaf9e1524a356ffebdcb908370880b3b.jpg')">
                <img src="https://i.pinimg.com/736x/30/51/a0/3051a034d1c16d8c5cf64d63e092a965.jpg" onclick="changeImage('https://i.pinimg.com/736x/30/51/a0/3051a034d1c16d8c5cf64d63e092a965.jpg')">
                <img src="https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg" onclick="changeImage('https://i.pinimg.com/736x/52/52/21/52522177d59bd363f4593453b2c158a6.jpg')">

             </div>
        </div>

        <!-- Product Details -->
        <div class="product-details">
            <p>Adidas</p><br>
            <h1>Adidas Campus 00s</h1>
            <p class="price">R 1399.99 ZAR</p><br>
            <div class="product-title">
            <p>Adidas Campus 00s "Black & White" sneakers</p><br>
            </div><br>

            <div class="product-hghlights">
            <h3>Highlights</h3><br> 
            </div>

            <ul>
                <li> Thick tongue and collar for a cushioned fit.</li>
                <li> Provides excellent grip and durability.</li>
                <li> Works with both casual and streetwear outfits.</li>
                <li> Classic 2000s skate shoe aesthetic with a chunky silhouette.</li>

            </ul><br>



            <p>Select Size:</p>
            <div class="size-grid">
                <button @onclick="selectSize(this, 3)">3</button>
                <button @onclick="selectSize(this, 5)">5</button>
                <button @onclick="selectSize(this, 6)">6</button>
                <button @onclick="selectSize(this, 7)">7</button>
                <button @onclick="selectSize(this, 9)">9</button>
                <button @onclick="selectSize(this, 11)">11</button>
            </div>

            <!-- The Quantity Selector -->
            <div class="quantity">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1" max="5">
            </div>

            <!-- Buttons -->
            <div class="buttons">
                <button class="add-to-cart">Add to Cart</button>
                <button class="buy-now" onclick="openModal()">Buy Now</button>

           
        </div><br>


            <div class="delivery-estimation">
            <p>ESTIMATED DELIVERY</p>
            <p>Mar 11 - Mar 14</p>
        </div>
        </div>

            
    </div>

    <!-- Related Products Section -->
    <section class="related-products">
        <h2>Customers Also Bought</h2>
        <div class="products-grid">
            <div class="product-card">
                <img src="https://i.pinimg.com/736x/6e/28/7d/6e287d3cfea0a89bbca1d29d810907f1.jpg" alt="Product 1">
                <h3>Adidas Yeezy Boost 350 V2</h3>
                <p>R 2100.99</p>
                <button style="background: orangered;">View Product</button>
            </div>
            <div class="product-card">
                <img src="https://i.pinimg.com/736x/3e/57/28/3e5728f16734a713d76c57376b984acc.jpg" alt="Product 2">
                <h3>Adidas Yeezy Foam Runner</h3>
                <p>R 3800.00</p>
                <button style="background: orangered;">View Product</button>

            </div>
            <div class="product-card">
                <img src="https://i.pinimg.com/736x/76/91/8c/76918c8caa336b832212e2b6488f7701.jpg" alt="Product 3">
                <h3>New Balance 9060 'Shadow Grey'</h3>
                <p>R2699.99</p>
                <button style="background: orangered;">View Product</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Hype Store. All Rights Reserved.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Refund Policy</a></p>
    </footer>






</template>



<script>

function selectSize(button, size) {
    document.querySelectorAll('.size-grid button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function changeImage(imageUrl) {
let mainImage = document.getElementById("mainImage");
mainImage.src = imageUrl;
mainImage.alt = "Selected Product Image";
}


</script>


<style scoped>

.navbar-nav svg {
    width: 24px;
    height: 24px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: beige;
    padding: 20px;
}

/* Header */
header {
    background: black;
    color: white;
    padding: 15px;
    text-align: center;
}

/* Product Section */
.product-container {
    display: flex;
    max-width: auto;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image {
    flex: 1;
    text-align: center;
}

.product-image img {
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.products-grid 

.product-image img:hover {
    transform: scale(1.05);
}

.image-gallery {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.image-gallery img {
    width: 70px;
    height: 70px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

.product-details {
    flex: 1;
    padding: 20px;
}

.price {
    font-size:16px;
    font-weight: lighter;
    margin-bottom: 10px;
}

.buttons {
    margin-top: 20px;
}


.size-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 10px 0;
        }
        .size-grid button {
            padding: 10px;
            border: none;
            background: #ddd;
            cursor: pointer;
            font-size: 1em;
            border-radius: 5px;
        }
        .size-grid button.selected {
            background: orangered;
            color: white;
        }
        .size-guide-button, .add-to-cart, .buy-now {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: none;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
        }

button {
    width: 100%;
    padding: 6px;
    margin: 5px 0;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}

.add-to-cart {
    background: orangered;
    color: white;
}

.buy-now {
    background: black;
    color: white;
}

.delivery-estimation {
    font-weight: lighter;
}

.view-product {
    background: orangered;
}

button:hover {
    opacity: 0.8;
}

/* Related Products */
.related-products {
    max-width: 1000px;
    margin: 40px auto;
    text-align: center;
}

.related-products h2 {
    margin-bottom: 20px;
}

.products-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.product-card {
    background: white;
    padding: 15px;
    width: 30%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
}

.product-card img {
    width: 100%;
    max-width: 200px;
    border-radius: 5px;
}

.product-card button {
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    margin-top: 10px;
}

.quantity {
            margin-top: 20px;
            text-align: left;
        }
        .quantity label {
            font-weight: bold;
        }
        .quantity input {
            width: 60px;
            padding: 5px;
            font-size: 16px;
            margin-left: 10px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

/* Footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
}

footer a {
    color: #ff9800;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .product-container {
        flex-direction: column;
    }

    .product-image img {
        max-width: 100%;
    }

    .buttons {
        display: flex;
        flex-direction: column;
    }

    .products-grid {
        flex-direction: column;
        align-items: center;
    }

    .product-card {
        width: 90%;
    }
}

.product-title {
    font-size: 16px;
    font-weight: lighter;
    font-style: normal;

}

.product-hghlights {
    font-weight: 500;


}
</style>