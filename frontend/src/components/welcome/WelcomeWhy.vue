<template>
  <section id="why">
    <div class="container">
      <div class="left">
        <img src="/images/image2.png" alt="About Illustration">
      </div>
      <div class="right">
        <h2>¿Por qué elegirnos como la mejor opción para construir su futuro?</h2>
        <p>Formamos profesionales competentes, íntegros y comprometidos</p>
        <p>El SENA, cuenta con una amplia trayectoria en la formación técnica y tecnológica, brindando oportunidades de desarrollo profesional a miles de personas.</p>
        <p>Somos una institución comprometida con la excelencia educativa y el crecimiento personal de nuestros estudiantes.</p>
        <div class="features-container">
          <div class="feature" v-for="feature in features" :key="feature.title">
            <div class="icon">
              <img :src="feature.icon" :alt="feature.alt">
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
        <a href="#" class="btn light">Contactanos</a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const features = [
  {
    icon: '/images/check-icon.svg',
    alt: 'Mission Icon',
    title: 'Practicas reales en el campo laboral',
    description: 'Aplica los conocimientos adquiridos en entornos laborales reales, fortaleciendo tu experiencia y empleabilidad, con el apoyo y respaldo de nuestra institución.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Flexible Learning Icon',
    title: 'Insentivos económicos',
    description: 'El sena cuenta con diversos incentivos económicos para apoyar a sus estudiantes durante su formación.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Support Icon',
    title: 'Flexibilidad horaria',
    description: 'Ofrecemos horarios flexibles para que puedas estudiar y trabajar al mismo tiempo, adaptándonos a tus necesidades.'
  },
  {
    icon: '/images/check-icon.svg',
    alt: 'Community Icon',
    title: 'Comunidad y Networking',
    description: 'Forma parte de una comunidad activa de estudiantes y profesionales, ampliando tus oportunidades de contacto y colaboración.'
  }
];
</script>
<style scoped>
@import "../../styles/WelcomeWhy.css";
</style>