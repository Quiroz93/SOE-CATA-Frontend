<script setup lang="ts">
import { ref } from 'vue';
import FiltroProgramas from '../components/FiltroProgramas.vue';
import ProgramasList from './ProgramasList.vue';
import $style from './ProgramasView.module.css';

const filtrosSeleccionados = ref({});

function onFiltrar(filtros: Record<string, any>) {
  filtrosSeleccionados.value = filtros;
}
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <div>
        <h1 :class="$style.titulo">Programas de Formación</h1>
        <p :class="$style.descripcion">Descubre oportunidades educativas y especialízate en áreas de alta demanda.</p>
      </div>
      <FiltroProgramas @filtrar="onFiltrar" />
    </div>

    <div :class="$style.banner">
      <img src="/images/foto1.jpg" alt="Banner institucional SENA" :class="$style.bannerImg" />
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <video controls poster="/images/foto2.jpg" :class="$style.bannerVideo">
          <source src="/videos/videosena.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <div :class="$style.bannerInfo">
          <h2 :class="$style.bannerInfoTitulo">¡Transforma tu futuro!</h2>
          <p :class="$style.bannerInfoDesc">El SENA te ofrece programas de formación gratuitos, certificados y alineados con las necesidades del sector productivo colombiano.</p>
        </div>
      </div>
    </div>

    <ProgramasList :filtros="filtrosSeleccionados" />

    <div :class="$style.acciones">
      <router-link to="/ofertas" :class="$style.botonPrincipal">Ver Ofertas</router-link>
      <router-link to="/" :class="$style.botonSecundario">Inicio</router-link>
    </div>
  </div>
</template>
