<template>
  <div class="projects">
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

    <div class="project-list">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
        @click="toggleDetails(project.id)"
      >
        <h3>{{ project.title }}</h3>
        <p>{{ project.shortDescription }}</p>
        <!-- Transition Slide on the whole container -->
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeProject === project.id" class="project-details-container">
            <div class="project-details">
              <p>{{ project.details }}</p>
            </div>
          </div>
        </transition>
      </div>
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
          shortDescription: "Un portfolio moderne.",
          details: "Un site Web conçu avec Vue.js et Tailwind CSS pour présenter mes projets."
        },
        {
          id: 2,
          title: "Gestion de Base de Données",
          type: "Base de donnés",
          date: "2023-11-20",
          shortDescription: "Projet sur SQL avancé.",
          details: "Un projet SQL avancé utilisant des triggers, des vues et des procédures stockées."
        },
        // Autres projets...
      ],
      types: ["Web", "Java", "Adm system", "Base de donnés", "Full stack"],
      selectedType: "",
      selectedOrder: "date-desc",
      filteredProjects: [],
      activeProject: null,
    };
  },
  created() {
    this.filterProjects();
  },
  methods: {
    filterProjects() {
      this.filteredProjects = this.projects.filter(project =>
        this.selectedType ? project.type === this.selectedType : true
      );
      this.sortProjects();
    },
    sortProjects() {
      this.filteredProjects.sort((a, b) => {
        if (this.selectedOrder === "date-desc") {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(a.date) - new Date(b.date);
        }
      });
    },
    toggleDetails(id) {
      this.activeProject = this.activeProject === id ? null : id;
    }
  }
};
</script>

<style scoped>
.projects {
  padding: 2rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filters select {
  padding: 0.5rem;
  font-size: 1rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  background: #f9f9f9;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-details-container {
  overflow: hidden; /* Prevents content overflow during animation */
}

.project-details {
  padding: 1rem;
  background: #e8f5e9;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #333;
}

/* Transition styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
