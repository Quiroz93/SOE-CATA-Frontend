<script setup lang="ts">
import { useRoute } from 'vue-router';
import PreinscripcionForm from '../components/PreinscripcionForm.vue';
import { ref, onMounted } from 'vue';
import { programasService } from '@/features/programas/services/programas.service';
import $style from './PreinscripcionView.module.css';

const route = useRoute();
const programaId = Number(route.params.programaId);
const programaNombre = ref('');

onMounted(async () => {
  if (programaId) {
    try {
      const { data } = await programasService.obtenerPorId(programaId);
      programaNombre.value = data?.nombre ?? '';
    } catch (e) {
      programaNombre.value = '';
    }
  }
});
</script>

<template>
  <div :class="$style.root">
    <h1 :class="$style.titulo">Preinscripción</h1>
    <div :class="$style.formulario">
      <PreinscripcionForm :oferta-programa-id="programaId" :programa-nombre="programaNombre" />
    </div>
  </div>
</template>
