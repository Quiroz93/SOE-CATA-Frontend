import { defineStore } from 'pinia';
import { preinscripcionService } from '@/features/preinscripcion/services/preinscripcion.service';
import type { PreinscripcionPayload } from '../types/preinscripcion.types';

export const usePreinscripcionStore = defineStore('preinscripcion', {
  state: () => ({
    loading: false,
    successMessage: '',
    errors: {} as Record<string, string[]>
  }),

  actions: {
    async enviar(payload: PreinscripcionPayload) {
      this.loading = true;
      this.errors = {};
      this.successMessage = '';
      try {
        await preinscripcionService.crear(payload);
        this.successMessage = 'Preinscripción realizada correctamente.';
      } catch (error: any) {
        if (error.type === 'validation') {
          this.errors = error.errors || {};
        } else {
          this.errors = {
            general: [error.message || 'Error inesperado']
          };
        }
      } finally {
        this.loading = false;
      }
    }
  }
});
