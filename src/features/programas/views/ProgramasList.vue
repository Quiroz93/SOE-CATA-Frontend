<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4" tabindex="0">Programas Disponibles</h1>
    
    <div v-if="store.loading" class="text-blue-500" role="status">Cargando programas...</div>
    <div v-if="store.error" class="text-red-500" role="alert">{{ store.error }}</div>
    
    <div v-if="store.programas.length === 0 && !store.loading" class="text-gray-500" role="status">
      No hay programas disponibles.
    </div>
    
    <div v-else>
      <div class="mb-4 text-sm text-gray-600">
        <span v-if="store.meta.total">
          Mostrando {{ programasPublicados.length }} de {{ store.meta.total }} programas
          (Página {{ store.meta.current_page || 1 }} de {{ store.meta.last_page || 1 }})
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProgramaCard
          v-for="programa in programasPublicados"
          :key="programa.id"
          :programa="programa"
        />
      </div>

      <!-- Controles de paginación -->
      <div v-if="store.meta.last_page && store.meta.last_page > 1" class="mt-6 flex justify-center items-center gap-4">
        <button
          @click="irAPagina(paginaActual - 1)"
          :disabled="paginaActual <= 1"
          class="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
          aria-label="Página anterior"
        >
          ← Anterior
        </button>
        
        <span class="text-sm font-medium">
          Página {{ paginaActual }} de {{ store.meta.last_page }}
        </span>
        
        <button
          @click="irAPagina(paginaActual + 1)"
          :disabled="paginaActual >= store.meta.last_page"
          class="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
          aria-label="Página siguiente"
        >
          Siguiente →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, ref, computed } from 'vue';
import { useProgramasStore } from '../stores/programas.store';
import ProgramaCard from '../components/ProgramaCard.vue';

const props = defineProps<{ filtros: Record<string, any> }>();
const store = useProgramasStore();
const paginaActual = ref(1);

const programasPublicados = computed(() => 
  store.programas.filter((p) => String(p.estado).toLowerCase() === 'publicado')
);

function cargarProgramas() {
  store.fetchProgramas({ 
    ...props.filtros,
    page: paginaActual.value
  });
}

function irAPagina(pagina: number) {
  paginaActual.value = pagina;
  cargarProgramas();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(cargarProgramas);
watch(() => props.filtros, () => {
  paginaActual.value = 1; // Reset a página 1 cuando cambian los filtros
  cargarProgramas();
}, { deep: true });
</script>
