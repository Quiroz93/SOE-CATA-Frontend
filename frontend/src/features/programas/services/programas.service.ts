import http from '../../../core/http/http.client';
import type { ApiResponse } from '../../../types/api.types';
import type { Programa } from '../types/programa.types';

export const programasService = {
  async listar(params?: Record<string, any>) {
    const response = await http.get<ApiResponse<Programa[]>>('/api/v1/programas', {
      params
    });
    return {
      data: response.data.data,
      meta: response.data.meta
    };
  },

  async obtenerPorSlug(slug: string) {
    const response = await http.get<ApiResponse<Programa>>(`/api/v1/programas/${slug}`);
    return response.data;
  }
};
