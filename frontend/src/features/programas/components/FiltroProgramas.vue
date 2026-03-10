<template>
  <form :class="$style.filtroForm" @submit.prevent="emitirFiltro">
    <input
      v-model="filtroNombre"
      type="text"
      placeholder="Buscar por nombre..."
      :class="$style.input"
    />
    <input
      v-model="filtroMunicipio"
      type="text"
      placeholder="Municipio"
      :class="$style.input"
    />
    <select v-model="filtroNivel" :class="$style.select">
      <option value="">Todos los niveles</option>
      <option value="Técnico">Técnico</option>
      <option value="Tecnólogo">Tecnólogo</option>
      <option value="Operario">Operario</option>
    </select>
    <button
      type="submit"
      :class="$style.botonFiltrar"
    >
      Filtrar
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import $style from './FiltroProgramas.module.css';

const filtroNombre = ref('');
const filtroMunicipio = ref('');
const filtroNivel = ref('');

const emit = defineEmits<{
  (e: 'filtrar', payload: { nombre: string; municipio: string; nivel: string }): void;
}>();

function emitirFiltro() {
  emit('filtrar', {
    nombre: filtroNombre.value,
    municipio: filtroMunicipio.value,
    nivel: filtroNivel.value
  });
}
</script>
