<template>
  <div id="app">
    <SiteNavbar />
    <div id="content">
      <SiteHeader v-if="isHomePage" />
      <router-view />
    </div>    
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteNavbar,
    SiteHeader,
    SiteFooter
  },
  computed: {
    // Vérifier si la route actuelle est la route d'accueil ('/')
    isHomePage() {
      return this.$route.path === '/'
    }
  }
}
</script>


<style >

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  margin-left: 250px;
}
</style>
