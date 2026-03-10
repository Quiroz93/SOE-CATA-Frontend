import http from '../../../core/http/http.client';
import type { ApiResponse } from '../../../types/api.types';
import type {
  PreinscripcionPayload,
  PreinscripcionResponse
} from '../types/preinscripcion.types';

export const preinscripcionService = {
  async crear(payload: PreinscripcionPayload) {
    const response = await http.post<
      ApiResponse<PreinscripcionResponse>
    >('/preinscripciones', payload);
    return response.data;
  }
};
