<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();
const appName = import.meta.env.VITE_APP_NAME || "SENA";

const navLinks = [
  { label: "Ofertas", to: "/ofertas" },
  { label: "Programas", to: "/programas" },
  { label: "Calendario", to: "/calendario" },
  { label: "Experiencias", to: "/experiencias" },
  { label: "Instructores", to: "/instructores" }
];

watch(
  () => route.fullPath,
  () => (isOpen.value = false)
);
</script>

<template>
  <nav>
    <div class="nav-container">

      <div class="logo">
        <img src="/images/Logosimbolo-SENA.svg" alt="SENA Logo" />
        <router-link to="/" class="logo-link">{{ appName }}</router-link>
      </div>

      <!-- Desktop -->
      <div class="menu-items">
        
        <router-link
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          :class="{ active: route.path === link.to }"
        >
          {{ link.label }}
        </router-link>
      </div>

            <!-- Mobile toggle -->

      <!-- Toggle siempre visible en móviles, cambia icono según estado -->
      <button
        class="menu-toggle toggle-animated"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
      >
        <span
          class="toggle-icon"
          :class="{ 'toggle-hide': isOpen, 'toggle-show': !isOpen }"
        >☰</span>
        <span
          class="toggle-icon"
          :class="{ 'toggle-hide': !isOpen, 'toggle-show': isOpen }"
        >✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { active: isOpen }]">
      <router-link
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        :class="{ active: route.path === link.to }"
      >
        {{ link.label }}
      </router-link>
    </div>

  </nav>
</template>

<style>
@import "../../styles/SenaNavbar.css";

/* Active link */
.active {
  color: var(--color-primario);
  font-weight: 600;
}

/* Fade opcional si decides usar transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>