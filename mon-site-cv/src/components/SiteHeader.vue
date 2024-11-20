<template>
  <header class="header">
    <div class="profile-container">
      <img src="@/assets/pp.jpg" alt="Photo de profil" class="profile-img" />
      <h1>Bonjour, je suis Alexi Fontanilles</h1>
      <p>Alternant en 3ème année</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>

<style scoped>
.header {
  background-color: white;
  color: #333;
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 2rem;
}

.profile-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  color: #40E0D0;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  color: #333;
}
</style>
