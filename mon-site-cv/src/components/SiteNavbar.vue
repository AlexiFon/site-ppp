<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/" class="nav-link">Accueil</router-link></li>
      <li><router-link to="/experience" class="nav-link">Expériences</router-link></li>
      <li><router-link to="/skills" class="nav-link">Compétences</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SiteNavbar"
}
</script>

<style scoped>
.navbar {
  background-color: #40E0D0;
  padding: 1rem 2rem;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  margin: 0 1rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2F4F4F;
}
</style>
