
<template>
  <div :class="$style.root">
    <h1 :class="$style.titulo">Ofertas</h1>
    <div :class="$style.lista">
      <OfertasList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import OfertasList from './OfertasList.vue';
import $style from './OfertasView.module.css';
</script>
