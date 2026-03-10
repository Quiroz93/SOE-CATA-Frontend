<template>
  <section id="contact">
    <div class="contact">
      <div class="container">
        <div class="heading-container">
          <h2>¿Listo para comenzar tu viaje educativo con SOE SENA?</h2>
          <p>Estamos aquí para ayudarte a dar el siguiente paso hacia tu futuro.</p>
          <a href="#" class="btn">Contáctanos Hoy</a>
        </div>
        <form action="#">
          <div class="group">
            <input type="text" id="name" name="name" placeholder="Nombre Completo" autocomplete="name" required>
            <input type="email" id="email" name="email" placeholder="Correo Electrónico" autocomplete="email" required>
          </div>
          <textarea id="message" name="message" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" class="btn">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// No props, solo contenido estático
</script>
<style scoped>
@import "../../styles/WelcomeContact.css";
</style>