<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/" class="nav-link">Accueil</router-link></li>
      <li><router-link to="/skills" class="nav-link">Compétences</router-link></li>
      <li><router-link to="/experience" class="nav-link">Expériences</router-link></li>
      <li><router-link to="/project" class="nav-link">Projets</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SiteNavbar",
};
</script>

<style scoped>
.navbar {
  position: fixed; /* Fixe la barre de navigation sur le côté */
  top: 0;
  left: 0; /* Pour la placer sur le côté gauche */
  height: 100%; /* Occupe toute la hauteur de l'écran */
  width: 250px; /* Largeur de la barre */
  background-color: #40E0D0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column; /* Dispose les éléments verticalement */
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  margin: 1rem 0;
  text-align: center;
  width: 100%;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  display: block;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #2F4F4F;
  background-color: rgba(0, 0, 0, 0.1); /* Ajout d'une couleur de fond au survol */
}
</style>
