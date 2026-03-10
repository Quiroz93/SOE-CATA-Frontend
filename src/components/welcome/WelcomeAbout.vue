<template>
  <section id="about">
    <div class="container">
      <div class="left">
        <h2>Sobre Nosotros</h2>
        <p>En <span class="nombre-centro">SENA CATA</span>, estamos dedicados a proporcionar educación de calidad y oportunidades de aprendizaje para todos. Nuestra misión es empoderar a los estudiantes con las habilidades y conocimientos necesarios para prosperar en un mundo en constante cambio.</p>
        <div class="features-container">
          <div class="feature" v-for="feature in features" :key="feature.title">
            <div class="icon">
              <img :src="feature.icon" :alt="feature.alt">
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
        <a href="#" class="btn outlined">Leer Más</a>
      </div>
      <div class="right">
        <img src="/images/Foto1.jpeg" alt="About Illustration">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const features = [
  {
    icon: '/images/check-icon.svg',
    alt: 'Mission Icon',
    title: 'Educación de Calidad',
    description: 'Programas diseñados por expertos para garantizar el mejor aprendizaje.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Flexible Learning Icon',
    title: 'Aprendizaje Flexible',
    description: 'Accede a nuestros cursos en cualquier momento y desde cualquier lugar.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Support Icon',
    title: 'Soporte Continuo',
    description: 'Nuestro equipo está aquí para ayudarte en cada paso de tu proceso formativo.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Community Icon',
    title: 'Educacion gratuita',
    description: 'El SENA ofrece acceso gratuito a una amplia variedad de cursos y recursos educativos.'
  }
];
</script>
<style scoped>
@import "../../styles/WelcomeAbout.css";
</style>