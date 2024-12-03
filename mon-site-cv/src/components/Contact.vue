<template>
  <div class="contact">
    <h2>Contactez-moi</h2>
    <form>
      <div class="form-group">
        <label for="name">Nom:</label>
        <input type="text" id="name" placeholder="Votre nom" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Votre email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" rows="5" placeholder="Votre message"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
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
}

h2 {
  font-size: 2rem;
  color: #40E0D0;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #40E0D0;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2F4F4F;
}
</style>
