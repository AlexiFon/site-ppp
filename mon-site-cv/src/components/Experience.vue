<template>
  <div class="timeline">
    <h2>Mes Expériences Professionnelles</h2>
    <div class="timeline-container">
      <!-- Flèche en haut de la frise -->
      <div class="timeline-arrow"></div>
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="timeline-item"
        :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
      >
        <div class="timeline-point"></div>
        <div class="timeline-content">
          <h3>{{ experience.role }} - {{ experience.company }}</h3>
          <p class="date">{{ experience.date }}</p>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceTimeline",
  data() {
    return {
      experiences: [
        {
          role: "Développeur Web",
          company: "[Entreprise]",
          date: "Janvier 2023 - Présent",
          description: "Conception et développement d’applications web.",
        },
        {
          role: "Stage en Développement",
          company: "[Entreprise]",
          date: "Juin 2022 - Décembre 2022",
          description: "Participation à la création de sites vitrines.",
        },
        {
          role: "Technicien Informatique",
          company: "[Entreprise]",
          date: "Septembre 2021 - Mai 2022",
          description: "Assistance technique et gestion de systèmes.",
        },
        {
          role: "Freelance",
          company: "[Entreprise]",
          date: "Janvier 2021 - Août 2021",
          description: "Création de projets web sur mesure pour des clients.",
        },
      ],
    };
  },
};
</script>


<style scoped>
/* Styles généraux */
.timeline {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  margin-top:50px;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #333;
}

/* Conteneur de la frise */
.timeline-container {
  position: relative;
  padding: 2rem 0;
}

.timeline-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background-color: #40e0d0;
  transform: translateX(-50%);
}

/* Flèche en haut de la frise */
.timeline-arrow {
  position: absolute;
  top: -1%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #40e0d0;
}

/* Carte de la timeline */
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item.left .timeline-content {
  margin-right: auto;
  text-align: right;
}

.timeline-item.right .timeline-content {
  margin-left: auto;
  text-align: left;
}

/* Point sur la frise */
.timeline-point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #40e0d0;
  border-radius: 50%;
  z-index: 2;
  border: 3px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Trait horizontal entre le point et la carte avec ::after */
.timeline-item.left .timeline-point::after,
.timeline-item.right .timeline-point::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 375%;
  height: 4px;
  background-color: #40e0d0;
  transform: translateY(-50%);
}

.timeline-item.left .timeline-point::after {
  right: 50%;  /* Le trait part de la droite du point */
}

.timeline-item.right .timeline-point::after {
  left: 50%;  /* Le trait part de la gauche du point */
}

/* Contenu des cartes */
.timeline-content {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 45%;
}

.timeline-item.left .timeline-content {
  margin-left: 0;
}

.timeline-item.right .timeline-content {
  margin-right: 0;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Titres et texte */
h3 {
  font-size: 1.5rem;
  color: #40e0d0;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-item .timeline-content {
    width: 100%;
  }

  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    margin: 0;
  }

  .timeline-container::before {
    left: 20px;
  }

  .timeline-point {
    left: 20px;
  }
}
</style>
