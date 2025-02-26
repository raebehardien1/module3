<template>
  <div class="about-us">
    <h2>About Hype</h2>
    <p class="about-description">
      Welcome to Hype! We are a passionate team of sneaker enthusiasts dedicated to bringing you the best in refurbished and limited-edition sneakers. Our mission is to provide high-quality, affordable sneakers while promoting sustainability in the fashion industry. Whether you're a sneakerhead or just looking for your next pair, we have something for everyone.
    </p>
    
    <h2>Meet the Team</h2>
    <div class="team-cards">
      <div class="team-card" v-for="owner in owners" :key="owner.name">
        <img :src="require(`../assets/images/${owner.image}`)" alt="Owner" class="owner-image" />
        <h3>{{ owner.name }}</h3>
        <p>{{ owner.role }}</p>
        <p>{{ owner.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const owners = [
  {
    name: 'Raeesa Behardien',
    role: 'Co-Founder',
    description: 'Passionate about bringing quality, affordable, and stylish sneakers to the masses.',
    image: 'image02.jpeg', 
  },
   {
    name: 'Ibrahim Karlie',
    role: 'Co-Founder',
    description: 'Driven by a love for sneakers and the environment, Ibrahim ensures every pair is refurbished to perfection.',
    image: 'IMG_0332.jpg', 
  },
  {
    name: 'Yandisa Khumalo',
    role: 'Co-Founder',
    description: 'A sneaker enthusiast and visionary, Yandisa is focused on creating a platform that celebrates culture and sustainability.',
    image: 'IMG-20250226-WA0012.jpg', 
  },
  {
    name: 'Alulutho Mihlali Dumani',
     role: 'Co-Founder',
    description: 'With a passion for fashion and innovation, Alulutho oversees the brand’s creative direction and marketing strategies.',
    image: 'image0.jpeg', 
  },
];
</script>

<style scoped>
.about-us {
  text-align: center;
  padding: 2rem;
}

.about-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.team-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.team-card {
  width: 250px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
}

.owner-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin: 1rem 0;
}

p {
  font-size: 1rem;
  color: #666;
}
</style>
