// Preinscripción
export interface PreinscripcionRequest {
  nombre: string;
  email: string;
  // Agregar otros campos según el contrato backend
}
export interface ApiMeta {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
  [key: string]: any;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: ApiMeta;
}
