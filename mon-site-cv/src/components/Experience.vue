<template>
  <div class="experience">
    <h2>Mes Expériences Professionnelles</h2>
    <ul>
      <li>
        <h3>Développeur Web - [Entreprise]</h3>
        <p>Janvier 2023 - Présent</p>
        <p>Conception et développement d’applications web.</p>
      </li>
      <li>
        <h3>Stage en Développement - [Entreprise]</h3>
        <p>Juin 2022 - Décembre 2022</p>
        <p>Participation à la création de sites vitrines.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExperiencePage",
};
</script>

<style scoped>
.experience {
  padding: 2rem;
}

h2 {
  font-size: 2rem;
  color: #40E0D0;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  color: #555;
}
</style>
