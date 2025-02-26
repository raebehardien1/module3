<template>
  <div class="help-page">
    <h2>Frequently Asked Questions (FAQ)</h2>
    
    <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
      <div class="faq-question" @click="toggleAnswer(index)">
        <h3>{{ faq.question }}</h3>
        <span v-if="openIndex === index">-</span>
        <span v-else>+</span>
      </div>
      
      <div class="faq-answer" v-if="openIndex === index">
        <p>{{ faq.answer }}</p>
      </div>
    </div>

    <div class="contact-us">
      <h3>Need More Information?</h3>
      <p>If you have any more questions or need further assistance, feel free to <strong>contact us</strong>! We are here to help you.</p>
      <p>Email us at: <a href="mailto:support@hype.com">support@hype.com</a></p>
      <p>Or use the form below to get in touch:</p>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = [
  {
    question: "What is Hype?",
    answer: "Hype is an online store that specializes in refurbished and limited-edition sneakers. We offer high-quality sneakers that are affordable and eco-friendly. Our mission is to provide our customers with sustainable options while keeping them stylish and comfortable."
  },
  {
    question: "How do I buy sneakers from Hype?",
    answer: "To buy sneakers from Hype, simply browse through our online store, select the sneakers you like, and click 'Add to Cart'. When you're ready, proceed to checkout and enter your shipping and payment details. After confirmation, your order will be processed, and you will receive a tracking number for your shipment."
  },
  // Add other FAQ items here...
];

const openIndex = ref(null);
const form = ref({
  name: '',
  email: '',
  message: ''
});

function toggleAnswer(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

function submitForm() {
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
  alert('Thank you for contacting us! We will get back to you soon.');
  // Reset the form after submission
  form.value = {
    name: '',
    email: '',
    message: ''
  };
}
</script>

<style scoped>
.help-page {
  text-align: center;
  padding: 2rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.faq-item {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}

.faq-question {
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  transition: all 0.3s;
}

.faq-question:hover {
  color: #f16c21; /* Neon orange */
}

.faq-answer {
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.5;
}

span {
  font-size: 1.3rem;
  margin-left: 10px;
}

.contact-us {
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.contact-us h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.contact-us p {
  font-size: 1.1rem;
  color: #444;
}

.contact-us a {
  color: #f16c21;
  text-decoration: none;
}

.contact-us a:hover {
  text-decoration: underline;
}

.contact-form {
  margin-top: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
}

.submit-button {
  padding: 0.8rem 1.5rem;
  background-color: #f16c21;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e15a17;
}

@media (max-width: 768px) {
  .help-page {
    padding: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .faq-question {
    font-size: 1.2rem;
  }

  .contact-us h3 {
    font-size: 1.6rem;
  }

  .contact-us p {
    font-size: 1rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
