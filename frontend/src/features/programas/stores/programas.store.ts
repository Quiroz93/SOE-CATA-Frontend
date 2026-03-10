import { defineStore } from 'pinia';
import { programasService } from '@/features/programas/services/programas.service';
import type { Programa } from '../types/programa.types';
import type { ApiMeta } from '../../../types/api.types';

export const useProgramasStore = defineStore('programas', {
  state: () => ({
    programas: [] as Programa[],
    programaActual: null as Programa | null,
    meta: {} as ApiMeta,
    loading: false,
    error: ''
  }),

  actions: {
    async fetchProgramas(filters?: Record<string, any>) {
      this.loading = true;
      this.error = '';
      try {
        const { data, meta } = await programasService.listar(filters);
        this.programas = data;
        this.meta = meta ?? {};
      } catch (err: any) {
        this.error = err?.message || 'Error al cargar programas.';
      } finally {
        this.loading = false;
      }
    },

    async fetchProgramaDetalle(id: number) {
      this.loading = true;
      try {
        const response = await programasService.obtenerPorId(id);
        this.programaActual = response.data;
      } catch (error) {
        this.programaActual = null;
      } finally {
        this.loading = false;
      }
    }
  }
});
