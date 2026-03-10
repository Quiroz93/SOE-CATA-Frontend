<template>
  <div>
    
    <WelcomeHeader />
    <WelcomeFeatured />
    <WelcomeAbout />
    <WelcomeServices />
    <WelcomeWhy />
    <WelcomeBlog />
    <WelcomeContact />
  </div>
</template>
<script setup lang="ts">

import WelcomeHeader from '../components/welcome/WelcomeHeader.vue';
import WelcomeFeatured from '../components/welcome/WelcomeFeatured.vue';
import WelcomeAbout from '../components/welcome/WelcomeAbout.vue';
import WelcomeServices from '../components/welcome/WelcomeServices.vue';
import WelcomeWhy from '../components/welcome/WelcomeWhy.vue';
import WelcomeBlog from '../components/welcome/WelcomeBlog.vue';
import WelcomeContact from '../components/welcome/WelcomeContact.vue';
</script>
<style scoped>
/* Puedes agregar estilos globales aquí */
</style>