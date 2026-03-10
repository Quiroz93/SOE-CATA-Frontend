<template>
  <div class="p-6">
    <div v-if="loading" class="text-blue-500">Cargando detalle...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <div v-if="ofertaSeleccionada" class="bg-white rounded shadow p-4">
      <div class="font-bold text-xl">{{ ofertaSeleccionada.nombre }}</div>
      <div class="text-sm text-gray-700">{{ ofertaSeleccionada.descripcion }}</div>
      <div class="text-sm">Inicio: {{ ofertaSeleccionada.fecha_inicio }} | Fin: {{ ofertaSeleccionada.fecha_fin }}</div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="programaOferta in ofertaSeleccionada.programas" :key="programaOferta.programa.id" class="border rounded p-3">
          <div class="font-semibold">{{ programaOferta.programa.nombre }}</div>
          <div class="text-sm">Instructor: {{ programaOferta.instructor.nombre }}</div>
          <div class="text-sm">Cupos: {{ programaOferta.cupos }}</div>
          <div class="text-sm">Modalidad: {{ programaOferta.modalidad }}</div>
          <div v-if="programaOferta.municipio" class="text-sm">Municipio: {{ programaOferta.municipio }}</div>
          <button
            class="mt-3 bg-green-600 text-white px-4 py-2 rounded"
            :disabled="programaOferta.cupos === 0"
            @click="irAFormularioPreinscripcion(programaOferta.programa.id)"
          >
            Preinscribirme
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useOfertasStore } from '../store/ofertas.store';

const route = useRoute();
const router = useRouter();
const store = useOfertasStore();
const { ofertaSeleccionada, loading, error } = storeToRefs(store);

onMounted(() => {
  const slug = String(route.params.slug || '');
  if (slug) {
    store.fetchOfertaDetalle(slug);
  }
});

function irAFormularioPreinscripcion(programaId: number) {
  if (programaId) {
    router.push({ name: 'PreinscripcionView', params: { programaId } });
  }
}
</script>
