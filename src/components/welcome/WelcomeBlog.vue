<template>
  <section id="blog">
    <div class="container">
      <div class="heading-container">
        <h2>Últimas Noticias</h2>
        <p>Mantente informado con nuestras últimas actualizaciones</p>
      </div>
      <div class="services-container">
        <div class="service" v-for="post in posts" :key="post.title">
          <a href="#">
            <img :src="post.img" :alt="post.alt">
          </a>
          <div class="content">
            <a href="#" class="read-more">
              <h3>{{ post.title }}</h3>
            </a>
            <div class="labels">
              <a v-for="label in post.labels" :key="label">{{ label }}</a>
            </div>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="btn outlined">Ver todas las noticias</a>
    </div>
  </section>
</template>
<script setup lang="ts">
const posts = [
  {
    img: '/images/blog1.jpg',
    alt: 'Blog Post 1',
    title: 'Nuevo Programa de Formación en Energías Renovables',
    labels: ['Energías Renovables', 'Educación'],
    description: 'Descubre nuestro nuevo programa diseñado para preparar a los estudiantes en el campo de las energías limpias y sostenibles.'
  },
  {
    img: '/images/blog2.jpg',
    alt: 'Blog Post 2',
    title: 'Evento de Networking para Estudiantes y Profesionales',
    labels: ['Networking', 'Carreras'],
    description: 'Únete a nuestro próximo evento para conectar con expertos de la industria y ampliar tus oportunidades profesionales.'
  },
  {
    img: '/images/blog3.jpg',
    alt: 'Blog Post 3',
    title: 'Historias de Éxito: Graduados que Transforman el Mundo',
    labels: ['Éxito', 'Graduados'],
    description: 'Inspírate con las historias de nuestros graduados que están haciendo una diferencia en sus comunidades y carreras.'
  }
];
</script>
<style scoped>
@import "../../styles/WelcomeBlog.css";
</style>