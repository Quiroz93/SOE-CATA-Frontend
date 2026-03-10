<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4" tabindex="0">Ofertas Disponibles</h1>
    
    <div v-if="store.loading" class="text-blue-500" role="status">Cargando ofertas...</div>
    <div v-if="store.error" class="text-red-500" role="alert">{{ store.error }}</div>
    
    <div v-if="store.ofertasDisponibles.length === 0 && !store.loading" class="text-gray-500" role="status">
      No hay ofertas disponibles.
    </div>
    
    <div v-else>
      <div class="mb-4 text-sm text-gray-600">
        Mostrando {{ store.ofertasParaTarjetas.length }} programas en {{ store.ofertasDisponibles.length }} ofertas activas
      </div>

      <div v-if="store.ofertasParaTarjetas.length > 0 && store.ofertasParaTarjetas.every(o => !o.programa || !o.programa.nombre)" class="text-yellow-600 mb-4" role="status">
        Las ofertas no tienen programas asociados.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OfertaCard 
          v-for="oferta in store.ofertasParaTarjetas" 
          :key="`${oferta.ofertaId}-${oferta.programa.id}`" 
          :oferta="oferta" 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useOfertasStore } from '../store/ofertas.store';
import OfertaCard from '../components/OfertaCard.vue';

const store = useOfertasStore();

onMounted(() => {
  store.fetchOfertas();
});
</script>
