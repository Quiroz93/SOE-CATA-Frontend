
<template>
  <SenaNavbar />
  <main class="min-h-screen bg-[var(--sena-gray-light)]">
    <div class="container mx-auto px-6 py-10">
      <router-view />
    </div>
  </main>
  <SenaFooter />
</template>

<script setup lang="ts">
import SenaNavbar from '@/components/layout/SenaNavbar.vue';
import SenaFooter from '@/components/layout/SenaFooter.vue';
</script>
