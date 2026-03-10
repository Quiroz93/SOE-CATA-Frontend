import http from '../../../core/http/http.client';
import type { ApiResponse } from '../../../types/api.types';
import type { Programa } from '../types/programa.types';

export const programasService = {
  async listar(params?: Record<string, any>) {
    const normalizedParams: Record<string, any> = {
      ...params,
      q: params?.q ?? params?.nombre,
    };

    if (!normalizedParams.q) {
      delete normalizedParams.q;
    }

    if (normalizedParams.nombre !== undefined) {
      delete normalizedParams.nombre;
    }

    const response = await http.get<ApiResponse<Programa[]>>('/api/v1/public/programas', {
      params: normalizedParams
    });
    return {
      data: response.data.data,
      meta: response.data.meta
    };
  },

  async obtenerPorId(id: number) {
    const response = await http.get<ApiResponse<Programa>>(`/api/v1/public/programas/${id}`);
    return response.data;
  }
};
