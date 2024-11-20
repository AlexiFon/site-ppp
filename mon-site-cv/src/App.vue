<template>
  <div id="app">
    <SiteNavbar />
    <SiteHeader />
    <router-view />
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
</style>
