<template>
  <footer class="footer">
    <p>© 2024 Mon Site - Tous droits réservés</p>
    <ul class="social-links">
      <li><a href="https://linkedin.com" target="_blank"><img src="@/assets/linkedin-logo.png" alt="LinkedIn" style="width: 20px; height: 20px; vertical-align: middle; margin-bottom: 5px;"/> LinkedIn</a></li>
      <li><a href="https://github.com" target="_blank"><img src="@/assets/github-logo.png" alt="GitHub" style="width: 20px; height: 20px; vertical-align: middle; margin-bottom: 5px;"/> GitHub</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter"
}
</script>

<style scoped>
.footer {
  background-color: rgb(237, 234, 234);
  color: #333;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
}

.social-links {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top:8px
}

.social-links li {
  margin: 0 10px;
}

.social-links a {
  color: turquoise;
  text-decoration: none;
  font-size: 18px;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
