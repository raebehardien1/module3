<template>
  <div class="payment-container">
    <!-- Left Side: Payment Form -->
    <div class="form-section">
      <form @submit.prevent="processPayment">
        <!-- Shipping Address Section -->
        <h2>Shipping Address</h2>
        <div>
          <label for="flatNumber">Flat/House Number:</label>
          <input
            id="flatNumber"
            v-model="shippingAddress.flatNumber"
            type="text"
            placeholder="Enter flat/house number"
            required
          />
        </div>
        <div>
          <label for="streetName">Street Name:</label>
          <input
            id="streetName"
            v-model="shippingAddress.streetName"
            type="text"
            placeholder="Enter street name"
            required
          />
        </div>
        <div>
          <label for="city">City:</label>
          <input
            id="city"
            v-model="shippingAddress.city"
            type="text"
            placeholder="Enter city"
            required
          />
        </div>
        <div>
          <label for="postalCode">Postal Code:</label>
          <input
            id="postalCode"
            v-model="shippingAddress.postalCode"
            type="text"
            placeholder="Enter postal code"
            required
          />
        </div>
        <!-- Payment Details Section -->
        <h2>Payment Form</h2>
        <div class="payment-logos">
          <img
            src="https://brandeps.com/logo-download/V/Visa-logo-vector-01.svg"
            alt="Visa Logo"
            v-if="cardBrand === 'Visa'"
          />
          <img
            src="https://brandeps.com/logo-download/M/Mastercard-logo-vector-01.svg"
            alt="Mastercard Logo"
            v-if="cardBrand === 'Mastercard'"
          />
        </div>
        <div>
          <label for="cardNumber">Card Number:</label>
          <input
            id="cardNumber"
            v-model="cardNumber"
            type="text"
            placeholder="Enter card number"
            @input="detectCardBrand"
            pattern="\d{16}"
            required
          />
        </div>
        <div>
          <label for="expiryDate">Expiry Date:</label>
          <input
            id="expiryDate"
            v-model="expiryDate"
            type="text"
            placeholder="MM/YY"
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            required
          />
        </div>
        <div>
          <label for="cvv">CVV:</label>
          <input
            id="cvv"
            v-model="cvv"
            type="text"
            placeholder="Enter CVV"
            pattern="\d{3}"
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
    <!-- Right Side: Logo and Order Summary -->
    <div class="summary-section">
      <div class="logo-section">
        <img
          src="/public/img/icons/img/HYPE_.ogo.png"
          alt="Company Logo"
        />
      </div>
      <div class="order-summary">
        <h2>Order Summary</h2>
        <ul>
          <li v-for="product in cartProduct" :key="product.id">
            {{ product.name }} - R{{ product.price }}
          </li>
        </ul>
        <p><strong>Total:</strong> R{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingAddress: {
        flatNumber: "",
        streetName: "",
        city: "",
        postalCode: "",
      },
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardBrand: "Unknown",
      cartProduct: [
        { id: 1, name: "Product 1", price: 200 },
        { id: 2, name: "Product 2", price: 200 },
      ],
    };
  },
  computed: {
    total() {
      return this.cartProduct.reduce((sum, product) => sum + product.price, 0);
    },
  },
  methods: {
    async processPayment() {
      if (this.validateShippingAddress() && this.validateCard()) {
        try {
          // Step 1: Insert the shipping address into the `addresses` table
          const addressResponse = await fetch('http://localhost:3500/adresses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              adress_line1: this.shippingAddress.flatNumber + ' ' + this.shippingAddress.streetName,
              adress_line2: '', // Optional
              city: this.shippingAddress.city,
              zip_code: this.shippingAddress.postalCode,
            }),
          });

          if (!addressResponse.ok) {
            throw new Error('Failed to save shipping address');
          }

          const addressData = await addressResponse.json();
          const addressId = addressData.address_id; // Get the ID of the newly inserted address

          // Step 2: Insert the payment details into the `checkout` table
          const checkoutResponse = await fetch('http://localhost:3500/checkouts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              card_number: this.cardNumber,
              expiry_date: this.expiryDate,
              cvv: this.cvv,
              address_id: addressId, // Link to the address
            }),
          });

          if (!checkoutResponse.ok) {
            throw new Error('Failed to process payment');
          }

          const checkoutData = await checkoutResponse.json();
          const checkoutId = checkoutData.checkout_id; // Get the ID of the newly inserted checkout

          // Step 3: Show success message
          alert('Payment processed successfully!');
          console.log('Checkout ID:', checkoutId);
          console.log('Address ID:', addressId);
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
      } else {
        alert('Please check your input details.');
      }
    },
    validateShippingAddress() {
      const postalCodeRegex = /^[0-9]{4}(?:-[0-9]{4})?$/;
      // Ensure all fields are treated as strings
      const flatNumber = String(this.shippingAddress.flatNumber).trim();
      const streetName = this.shippingAddress.streetName.trim();
      const city = this.shippingAddress.city.trim();
      const postalCode = String(this.shippingAddress.postalCode).trim();
      return (
        flatNumber !== "" &&
        streetName !== "" &&
        city !== "" &&
        postalCodeRegex.test(postalCode)
      );
    },
    validateCard() {
      const cardRegex = /^[0-9]{16}$/; // 16-digit card number
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
      const cvvRegex = /^[0-9]{3}$/; // 3-digit CVV
      // Validate expiry date is not in the past
      if (!expiryRegex.test(this.expiryDate)) {
        return false;
      }
      const [month, year] = this.expiryDate.split("/").map(Number);
      const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
      const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        alert("Expiry date cannot be in the past.");
        return false;
      }
      return (
        cardRegex.test(this.cardNumber) &&
        expiryRegex.test(this.expiryDate) &&
        cvvRegex.test(this.cvv)
      );
    },
    detectCardBrand() {
      if (this.cardNumber.startsWith("4")) {
        this.cardBrand = "Visa";
      } else if (["51", "52", "53", "54", "55"].includes(this.cardNumber.slice(0, 2))) {
        this.cardBrand = "Mastercard";
      } else {
        this.cardBrand = "Unknown";
      }
    },
  },
};
</script>

<style scoped>
/* Main Container */
.payment-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
/* Left Side: Form Section */
.form-section {
  flex: 1;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #F9F9F9;
}
/* Form Styles */
form {
  width: 100%;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056B3;
}
h2 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.payment-logos img {
  width: 100px; /* Set a fixed width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px;
}
/* Right Side: Summary Section */
.summary-section {
  flex: 1;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #F1F1F1;
  text-align: center;
}
/* Logo Section */
.logo-section img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
/* Order Summary */
.order-summary {
  margin-top: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.order-summary h3 {
  margin-bottom: 10px;
  color: #333;
}
.order-summary ul {
  list-style: none;
  padding: 0;
}
.order-summary li {
  margin-bottom: 10px;
  color: #555;
}
.order-summary p {
  font-weight: bold;
  color: #333;
}
/* Responsive Design */
@media (max-width: 768px) {
  .payment-container {
    flex-direction: column;
  }
  .form-section,
  .summary-section {
    max-width: 100%;
  }
}
</style>