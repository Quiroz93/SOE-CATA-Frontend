<script setup lang="ts">
import { reactive } from 'vue';
import { usePreinscripcionStore } from '../stores/preinscripcion.store';


const props = defineProps<{
  ofertaProgramaId?: number;
  programaNombre?: string;
}>();

const store = usePreinscripcionStore();


const form = reactive({
  oferta_programa_id: props.ofertaProgramaId ?? 0,
  tipo_documento: '',
  numero_documento: '',
  nombres: '',
  apellidos: '',
  email: '',
  telefono: ''
});

import { ref } from 'vue';

const errorOfertaPrograma = ref('');

const submit = async () => {
  errorOfertaPrograma.value = '';
  if (!form.oferta_programa_id || form.oferta_programa_id === 0) {
    errorOfertaPrograma.value = 'El ID de la oferta de programa es obligatorio y debe ser un número válido.';
    return;
  }
  // Aseguramos que siempre sea number
  await store.enviar({
    ...form,
    oferta_programa_id: Number(form.oferta_programa_id)
  });
};
</script>

<template>
  <form @submit.prevent="submit">
    <div v-if="form.oferta_programa_id && props.programaNombre">
      <label>Oferta:</label>
      <h2>{{ props.programaNombre }}</h2>
    </div>
    <div v-if="errorOfertaPrograma" style="color: red; margin-bottom: 8px;">
      {{ errorOfertaPrograma }}
    </div>
    <div>
      <input v-model="form.tipo_documento" placeholder="Tipo de documento" />
      <span v-if="store.errors.tipo_documento">
        {{ store.errors.tipo_documento[0] }}
      </span>
    </div>
    <div>
      <input v-model="form.numero_documento" placeholder="Número de documento" />
      <span v-if="store.errors.numero_documento">
        {{ store.errors.numero_documento[0] }}
      </span>
    </div>
    <div>
      <input v-model="form.nombres" placeholder="Nombres" />
      <span v-if="store.errors.nombres">
        {{ store.errors.nombres[0] }}
      </span>
    </div>
    <div>
      <input v-model="form.apellidos" placeholder="Apellidos" />
      <span v-if="store.errors.apellidos">
        {{ store.errors.apellidos[0] }}
      </span>
    </div>
    <div>
      <input v-model="form.email" placeholder="Correo electrónico" />
      <span v-if="store.errors.email">
        {{ store.errors.email[0] }}
      </span>
    </div>
    <div>
      <input v-model="form.telefono" placeholder="Teléfono" />
      <span v-if="store.errors.telefono">
        {{ store.errors.telefono[0] }}
      </span>
    </div>
    <div v-if="store.errors.general">
      {{ store.errors.general[0] }}
    </div>
    <button type="submit" :disabled="store.loading">
      {{ store.loading ? 'Enviando...' : 'Enviar' }}
    </button>
    <div v-if="store.successMessage">
      {{ store.successMessage }}
    </div>
  </form>
</template>
