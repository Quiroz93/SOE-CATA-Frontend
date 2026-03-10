import { defineStore } from 'pinia';
import type { Oferta, OfertaCardItem } from '../types/oferta.types';
import { getOfertas, getOfertaDetalle } from '../services/ofertas.service';

export const useOfertasStore = defineStore('ofertas', {
  state: () => ({
    ofertas: [] as Oferta[],
    ofertaSeleccionada: null as Oferta | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchOfertas() {
      this.loading = true;
      this.error = null;
      try {
        const result = await getOfertas();
        this.ofertas = result;
      } catch (e: any) {
        this.error = e.message || 'Error al cargar ofertas';
      } finally {
        this.loading = false;
      }
    },
    async fetchOfertaDetalle(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        this.ofertaSeleccionada = await getOfertaDetalle(slug);
      } catch (e: any) {
        this.error = e.message || 'Error al cargar detalle';
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    // Filtra ofertas activas
    ofertasDisponibles: (state): Oferta[] => state.ofertas.filter((o: Oferta) => {
      const estado = String(o.estado).toLowerCase();
      return estado === '1' || estado === 'activo' || estado === 'publicado';
    }),

    ofertasParaTarjetas: (state): OfertaCardItem[] => {
      const activas = state.ofertas.filter((o: Oferta) => {
        const estado = String(o.estado).toLowerCase();
        return estado === '1' || estado === 'activo' || estado === 'publicado';
      });

      return activas.flatMap((oferta: Oferta) => {
        if (!oferta.programas || oferta.programas.length === 0) {
          return [{
            ofertaId: oferta.id,
            ofertaSlug: oferta.slug,
            ofertaNombre: oferta.nombre,
            ofertaDescripcion: oferta.descripcion,
            fecha_inicio: oferta.fecha_inicio,
            fecha_fin: oferta.fecha_fin,
            estado: oferta.estado,
            cupos: 0,
            modalidad: '',
            municipio: '',
            programa: { id: 0, nombre: '' },
            instructor: { nombre: '' },
          }];
        }

        return oferta.programas.map((programaOferta: any) => ({
          ofertaId: oferta.id,
          ofertaSlug: oferta.slug,
          ofertaNombre: oferta.nombre,
          ofertaDescripcion: oferta.descripcion,
          fecha_inicio: oferta.fecha_inicio,
          fecha_fin: oferta.fecha_fin,
          estado: oferta.estado,
          cupos: programaOferta.cupos,
          modalidad: programaOferta.modalidad,
          municipio: programaOferta.municipio,
          programa: programaOferta.programa,
          instructor: programaOferta.instructor,
        }));
      });
    },
  },
});
