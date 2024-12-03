import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // Ajoutez cette ligne pour utiliser Vue Router
  .mount('#app')
