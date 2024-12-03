import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Home.vue'
import ExperiencePage from '../components/Experience.vue'
import SkillsPage from '../components/Skills.vue'
import ContactPage from '../components/Contact.vue'
import ProjectPage from '../components/Projects.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/experience', component: ExperiencePage },
  { path: '/skills', component: SkillsPage },
  { path: '/contact', component: ContactPage },
  { path: '/project', component: ProjectPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
