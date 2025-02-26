<template>

<nav class="navbar navbar-expand-lg py-4" style="background-color: black;">
    <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
            <img src="https://files.slack.com/files-tmb/T02LW4RMXJQ-F08DSSD4N6B-22bc3f1070/beige_and_red_handwritten_typographic_clothing_brand_logo__1_-removebg-preview_480.png" alt="Hype Store Logo" width="100" height="30" class="me-2">
        </a>
        
        <!-- Toggle Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">    
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Search Form -->
        <form class="d-flex w-50 me-auto" role="search" @submit.prevent="searchItems">
    <input 
        class="form-control me-2" 
        type="search" 
        v-model="searchQuery"
        placeholder="Search for brand, color, etc" 
        aria-label="Search" 
        style="background-color: #333; border-color: orangered; color: white;"
    >
    <button 
        class="btn" 
        type="submit" 
        style="background-color: orangered; border-color: orangered; color: white;"
    >Search</button>
</form>


        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Pushed Icons to the Right Corner -->
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">   
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/" style="color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                        </svg>
                        <span> HOME </span>

                    </a>
                </li>    
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/about" style="color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
                        <span> ABOUT </span>

                    </a>
                </li>    
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href='/contact' style="color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16"> 
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                        </svg>
                        <span> Help </span>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" style="color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <span> CART </span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Track my Order</a></li>
                        <li><a class="dropdown-item" href="#">Support</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>


</template>


<script>
export default {
    data() {
        return {
            searchQuery: "",
            products: [
                { name: "Nike Air Max 98 University Red", category: "sneakers", color: "red" },
                { name: "Nike Air Foamposite One Penny PE", category: "sneakers", color: "blue" },
                { name: "Nike Air Max 1 Patta Noise Aqua", category: "sneakers", color: "aqua" },
                // Add more products here
            ]
        };
    },
    methods: {
        searchItems() {
            const filteredItems = this.products.filter(product => 
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                product.color.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            
            console.log("Search Results:", filteredItems); // Replace with your display logic
        }
    }
};


</script>






<style scoped>

.navbar-nav svg {
    width: 25px; /* Adjust size as needed */
    height: 28px;
    margin-left: 40px; /* Add space between icons if necessary */
}

.navbar form {
    margin-right: 5rem; /* Adjust as needed */
}

.navbar .navbar-nav {
    margin-left: 5rem; /* Adjust as needed */
}

.navbar-nav {
    margin-left: auto; /* Ensures the icons are always pushed to the right */
}

/* Dropdown Menu Styling */
.dropdown-menu {
    background-color: black; /* Black background */
    border: 1px solid orangered; /* Orange-red border */
    color: white; /* White text color */
}

/* Dropdown Items Styling */
.dropdown-item {
    color: white; /* White text for dropdown items */
}

.dropdown-item:hover {
    background-color: orangered; /* Orange-red background on hover */
    color: black; /* Black text on hover */
}

/* Dropdown Divider Styling */
.dropdown-divider {
    border-top: 1px solid orangered; /* Orange-red divider */
}

</style>
