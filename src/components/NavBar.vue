<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container-fluid">

        <a class="navbar-brand" href="#">dwsjwsjkwkjsdijdijdi</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">    
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Added 'me-auto' to push search bar to the left & 'me-4' to add right margin -->
        <form class="d-flex w-50 me-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search for brand, colour etc" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Added 'ms-4' to push the nav links to the right -->
            <ul class="navbar-nav justify-content-between ms-4 mb-2 mb-lg-0">   
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg></a>
                </li>    
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
</svg></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">My Order</a></li>
                        <li><a class="dropdown-item" href="#">Support</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-outline-primary">Login</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-danger">Sign up</button>
                </li>
            </ul>
        </div>

    </div>
</nav>

 <!-- This is the Header -->
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
                <h3>New Balance 9060</h3>
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
