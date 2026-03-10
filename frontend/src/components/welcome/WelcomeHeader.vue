<template>
  <header>
    <div class="left">
      <div>
        <h3 class="pre-heading">Bienvenido a <span class="siglas-centro">SENA CATA</span></h3>
      </div>
      <div class="titulo-header">
      <h2>Un mundo de oportunidades</h2>
      </div>
      <p class="sub-heading">Tu puerta al conocimiento y el aprendizaje.</p>
      <div class="buttons">
        <router-link to="/programas" class="btn">Explorar Programas</router-link>
        <router-link to="/ofertas" class="btn outlined">Ver Oferta</router-link>
      </div>
    </div>
    <div class="right">
      <img src="/images/hero-image2.png" alt="Education Illustration">
      <div class="bg-color"></div>
    </div>
  </header>
</template>
<script setup lang="ts">
// No props, solo contenido estático
</script>
<style scoped>
@import "../../styles/WelcomeHeader.css";
</style>