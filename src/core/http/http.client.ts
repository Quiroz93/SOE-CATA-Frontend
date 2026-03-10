import axios from 'axios';
import type { ApiResponse } from '../../types/api.types';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

/**
 * Interceptor de respuestas
 * Valida contrato institucional
 */
http.interceptors.response.use(
  (response) => {
    const data: ApiResponse<any> = response.data;

    if (data.success === false) {
      return Promise.reject({
        message: data.message,
        errors: data.data ?? null,
        meta: data.meta ?? null,
      });
    }

    // Mutate response.data but return the original response object
    response.data = data;
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || 'Error inesperado';
      const errors = error.response.data?.data || undefined;

      if (status === 422) {
        return Promise.reject({
          status,
          message,
          errors,
        });
      }
      if (status === 409) {
        return Promise.reject({
          status,
          message: 'Ya existe una preinscripción',
        });
      }
      if (status === 400) {
        return Promise.reject({
          status,
          message: 'Cupos agotados',
        });
      }
      if (status === 429) {
        return Promise.reject({
          status,
          message: 'Demasiadas solicitudes',
        });
      }
      if (status === 404) {
        return Promise.reject({
          status,
          message: 'Recurso no encontrado',
        });
      }
      if (status >= 500) {
        return Promise.reject({
          status,
          message: 'Error interno del servidor',
        });
      }
    }
    return Promise.reject({
      status: 0,
      message: 'Error de conexión',
    });
  }
);

export default http;
