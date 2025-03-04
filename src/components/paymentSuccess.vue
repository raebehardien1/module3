<template>
    <div>
      <PaymentForm @payment-success="handlePaymentSuccess" />
      <!-- Modal for Payment Success -->
      <div v-if="isPaymentSuccessful" class="modal-overlay">
        <div class="modal">
          <h2>Payment Successful!</h2>
          <p>Thank you for your payment.</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  import PaymentForm from "@/components/P";
  export default {
    components: {
      PaymentForm,
    },
    data() {
      return {
        isPaymentSuccessful: false, // Controls the visibility of the modal
      };
    },
    methods: {
      handlePaymentSuccess(paymentDetails) {
        console.log("Payment Details:", paymentDetails);
        this.isPaymentSuccessful = true; // Show the modal
      },
      closeModal() {
        this.isPaymentSuccessful = false; // Hide the modal
      },
    },
  };
  </script>
  <style scoped>
  /* Modal Overlay */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  /* Modal Content */
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
  }
  .modal h2 {
    margin-bottom: 10px;
  }
  .modal button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .modal button:hover {
    background-color: #0056B3;
  }
  </style>






