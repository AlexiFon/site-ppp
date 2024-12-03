<template>
  <div class="projects">
    <h2>Mes Projets</h2>

    <div class="controls">
      <div class="filters">
        <select v-model="selectedType" @change="filterProjects">
          <option value="">Tous les types</option>
          <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
        </select>
        <select v-model="selectedOrder" @change="sortProjects">
          <option value="date-desc">Date (décroissant)</option>
          <option value="date-asc">Date (croissant)</option>
        </select>
      </div>
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          @input="filterProjects"
          placeholder="Rechercher un projet..."
        />
      </div>
    </div>

    <div class="project-list">
      <section
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-section"
        @click="toggleDetails(project.id)"
      >
        <header class="project-header">
          <div class="project-meta">
            <span class="project-team">👥 {{ project.teamSize }} personnes</span>
            <span class="project-date">{{ formatDate(project.date) }}</span>
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-type">{{ project.type }}</p>
        </header>
        <p class="short-description">{{ project.shortDescription }}</p>
        <transition name="expand">
          <div v-if="activeProject === project.id" class="project-details">
            <p>{{ project.details }}</p>
          </div>
        </transition>
      </section>
    </div>

    <div v-if="!filteredProjects.length" class="no-results">
      Aucun projet ne correspond à votre recherche.
    </div>
  </div>
</template>


<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Site Web Portfolio",
          type: "Web",
          date: "2024-01-01",
          teamSize: 1, // Nouvelle donnée : taille de l'équipe
          shortDescription: "Un portfolio moderne.",
          details: "Un site Web conçu avec Vue.js et Tailwind CSS pour présenter mes projets.",
        },
        {
          id: 2,
          title: "Gestion de Base de Données",
          type: "Base de donnés",
          date: "2023-11-20",
          teamSize: 3, // Taille de l'équipe pour ce projet
          shortDescription: "Projet sur SQL avancé.",
          details: "Un projet SQL avancé utilisant des triggers, des vues et des procédures stockées.",
        },
        // Autres projets...
      ],
      types: ["Web", "Java", "Adm system", "Base de donnés", "Full stack"],
      selectedType: "",
      selectedOrder: "date-desc",
      searchQuery: "",
      filteredProjects: [],
      activeProject: null,
    };
  },
  created() {
    this.filterProjects();
  },
  methods: {
    filterProjects() {
      const searchLower = this.searchQuery.toLowerCase();
      this.filteredProjects = this.projects
        .filter(
          (project) =>
            (!this.selectedType || project.type === this.selectedType) &&
            project.title.toLowerCase().includes(searchLower)
        )
        .sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          // Vérification si les dates sont valides
          if (isNaN(dateA) || isNaN(dateB)) {
            return 0;  // Retourne 0 si l'une des dates est invalide
          }

          if (this.selectedOrder === "date-desc") {
            return dateB - dateA; // Tri décroissant
          } else {
            return dateA - dateB; // Tri croissant
          }
        });
    },

    sortProjects() {
      this.filterProjects(); // Appeler filterProjects pour re-appliquer le tri et le filtre
    },

    toggleDetails(id) {
      this.activeProject = this.activeProject === id ? null : id;
    },

    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("fr-FR", options);
    },
  },
};
</script>


<style scoped>
.projects {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.filters select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.search-bar input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-section {
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.project-section:hover {
  background-color: #f9f9f9;
}

.project-header {
  margin-bottom: 0.5rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
}

.project-meta span {
  display: inline-block;
}

.project-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #40E0D0;
}

.project-type {
  font-size: 0.9rem;
  color: #777;
}

.short-description {
  font-size: 1rem;
  color: #555;
}

.project-details {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #333;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 5px;
}

/* Transition styles */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.expand-enter, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.expand-enter-to {
  max-height: 500px;
  opacity: 1;
}

.no-results {
  text-align: center;
  color: #888;
  font-size: 1rem;
  margin-top: 1.5rem;
}
</style>
