<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4" tabindex="0">Programas Disponibles</h1>
    <div>Programas cargados: {{ store.programas.length }}</div>
    <div v-if="store.loading" class="text-blue-500" role="status">Cargando programas...</div>
    <div v-if="store.error" class="text-red-500" role="alert">{{ store.error }}</div>
    <div v-if="store.programas.length === 0 && !store.loading" class="text-gray-500" role="status">No hay programas disponibles.</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProgramaCard v-for="programa in store.programas" :key="programa.id" :programa="programa" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProgramasStore } from '../stores/programas.store';
import ProgramaCard from '../components/ProgramaCard.vue';

const store = useProgramasStore();

onMounted(() => {
  store.fetchProgramas();
});
</script>
