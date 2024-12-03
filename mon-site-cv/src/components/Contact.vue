<template>
  <div class="contact">
    <h2>Contactez-moi</h2>

    <div class="contact-info">
      <p><strong>Email :</strong> <a href="mailto:example@example.com">example@example.com</a></p>
      <p><strong>Localisation :</strong> Toulouse, 31000</p>
    </div>

    <div class="social-links">
      <a href="https://github.com/username" target="_blank" class="social-link github">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://linkedin.com/in/username" target="_blank" class="social-link linkedin">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}

h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
}

.contact-info {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #333;
}

.contact-info p {
  margin: 0.5rem 0;
}

.contact-info a {
  color: #40E0D0;
  text-decoration: none;
  font-weight: bold;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.github {
  background-color: #333;
}

.github:hover {
  background-color: #555;
}

.linkedin {
  background-color: #0077b5;
}

.linkedin:hover {
  background-color: #005582;
}

.social-link i {
  font-size: 1.8rem;
}
</style>
