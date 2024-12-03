<template>
    <div class="skills-bubbles">
        <h2>Mes Compétences</h2>
        <div class="bubbles-container">
            <div v-for="(skill, index) in skills" :key="index" class="skill-bubble" :class="{
                'active': activeSkill === index,
                'hovered': hoveredSkill === index
            }" @mouseenter="hoveredSkill = index" @mouseleave="onMouseLeave(index)" @click="toggleActiveSkill(index)">
            
                <div v-if="skill.logo" class="skill-logo">
                    <img :src="skill.logo" :alt="skill.name + ' logo'" />
                </div>

                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                    <span v-for="n in 5" :key="n" class="level-dot" :class="{
                        'filled': n <= Math.floor(skill.level),
                        'half-filled': n === Math.ceil(skill.level) && skill.level % 1 >= 0.5
                    }"></span>
                </div>

                <transition name="slide-fade">
                    <div v-if="activeSkill === index" class="associated-projects">
                        <h4>Projet(s) associé(s)</h4>
                        <div v-for="(project, projIndex) in skill.associatedProjects" :key="projIndex"
                            class="project-link" @click.stop="navigateToProject(project)">
                            {{ project.title }}
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SkillBubbles",
    data() {
        return {
            activeSkill: null,
            hoveredSkill: null,
            skills: [
                {
                    name: "Sql Oracle",
                    level: 4,
                    logo: require('@/assets/sqloracle.png'),
                    associatedProjects: [
                        {
                            id: 2,
                            title: "Gestion de Base de Données",
                            description: "Projet SQL avancé utilisant des triggers, des vues et des procédures stockées"
                        }
                    ]
                },
                {
                    name: "Vue.js",
                    level: 4.5,
                    logo: require('@/assets/vuejs.png'),
                    associatedProjects: [
                        {
                            id: 1,
                            title: "Site Web Portfolio",
                            description: "Portfolio moderne développé avec Vue.js et Tailwind CSS"
                        }
                    ]
                },
                {
                    name: "JavaScript",
                    level: 4,
                    logo: require('@/assets/javascript.png'),
                    associatedProjects: [
                        {
                            id: 3,
                            title: "Application Web Interactive",
                            description: "Projet démontrant des compétences avancées en JavaScript"
                        }
                    ]
                },
                {
                    name: "Vue.js",
                    level: 4.5,
                    logo: require('@/assets/vuejs.png'),
                    associatedProjects: [
                        {
                            id: 1,
                            title: "Site Web Portfolio",
                            description: "Portfolio moderne développé avec Vue.js et Tailwind CSS"
                        }
                    ]
                },
                {
                    name: "JavaScript",
                    level: 4,
                    logo: require('@/assets/javascript.png'),
                    associatedProjects: [
                        {
                            id: 3,
                            title: "Application Web Interactive",
                            description: "Projet démontrant des compétences avancées en JavaScript"
                        }
                    ]
                },
                {
                    name: "Vue.js",
                    level: 4.5,
                    logo: require('@/assets/vuejs.png'),
                    associatedProjects: [
                        {
                            id: 1,
                            title: "Site Web Portfolio",
                            description: "Portfolio moderne développé avec Vue.js et Tailwind CSS"
                        }
                    ]
                },
                {
                    name: "JavaScript",
                    level: 4,
                    logo: require('@/assets/javascript.png'),
                    associatedProjects: [
                        {
                            id: 3,
                            title: "Application Web Interactive",
                            description: "Projet démontrant des compétences avancées en JavaScript"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        navigateToProject(project) {
            console.log('Navigate to project:', project.title);
        },
        onMouseLeave(index) {
            // Reset hovered skill
            this.hoveredSkill = null;

            // Only reset active skill if it's not explicitly clicked
            if (this.activeSkill === index) {
                this.activeSkill = null;
            }
        },
        toggleActiveSkill(index) {
            // Toggle the active skill on click
            this.activeSkill = (this.activeSkill === index ? null : index);
        }
    }
};
</script>

<style scoped>
.skills-bubbles {
    padding: 20px;
    margin-top: 50px;
}

h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
}

.skill-logo {
    width: 80px; /* Taille maximale de l'image */
    height: 80px; /* Taille maximale de l'image */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px; /* Espacement avec le texte */
}

.skill-logo img {
    max-width: 100%; /* Ajuste la largeur de l'image sans la déformer */
    max-height: 100%; /* Ajuste la hauteur de l'image sans la déformer */
    object-fit: contain; /* Garde les proportions de l'image */
    border-radius: 50%; /* Si vous voulez un effet de cercle */
}


.bubbles-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 40px;
}

.skill-bubble {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #40E0D0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    color: white;
}

.skill-bubble.hovered {
    background-color: #30A89E;
    /* Darker turquoise on hover */
    transform: scale(1.05);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
}

.skill-bubble h3 {
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 1.2rem;
}

.skill-level {
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
}

.level-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #bdc3c7;
    transition: background-color 0.3s ease;
}

.level-dot.filled {
    background-color: #2ecc71;
}

.level-dot.half-filled {
    background: linear-gradient(to right,
            #2ecc71 50%,
            #bdc3c7 50%);
}

.associated-projects {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    background-color: #40E0D0;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.project-link {
    background-color: #bdc3c7;
    color: black;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.project-link:hover {
    background-color: #75797c;
}

/* Slide fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>