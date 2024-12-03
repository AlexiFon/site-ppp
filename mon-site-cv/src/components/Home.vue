<template>
  <div class="home">
    <h2>Bienvenue sur mon site CV</h2>
    <p>Découvrez mes expériences, mes compétences et contactez-moi directement.</p>
    <!-- <img src="@/assets/welcome-image.jpg" alt="Bienvenue" class="welcome-img" /> -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

h2 {
  font-size: 2.5rem;
  color: #40E0D0;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}

.welcome-img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 0 auto;
}
</style>
