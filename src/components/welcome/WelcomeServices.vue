<template>
  <section id="services">
    <div class="container">
      <div class="heading-container">
        <h2>Nuestros Programas</h2>
        <p>Conoce nuestros programas de formación</p>
      </div>
      <div class="services-container">
        <div class="service" v-for="service in services" :key="service.title">
          <img :src="service.img" :alt="service.alt">
          <div class="content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const services = [
  {
    img: '/images/service1.jpg',
    alt: 'TI',
    title: 'Tecnología de la Información',
    description: 'Desarrolla habilidades en programación, redes y ciberseguridad con nuestros cursos especializados.'
  },
  {
    img: '/images/service2.jpg',
    alt: 'Salud',
    title: 'Salud y Bienestar',
    description: 'Prepárate para una carrera en el sector de la salud con nuestros programas de formación integral.'
  },
  {
    img: '/images/service3.jpg',
    alt: 'Negocios',
    title: 'Negocios y Emprendimiento',
    description: 'Adquiere las habilidades necesarias para iniciar y gestionar tu propio negocio con éxito.'
  }
];
</script>
<style scoped>
@import "../../styles/WelcomeServices.css";
</style>