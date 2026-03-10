export interface PreinscripcionPayload {
  oferta_programa_id: number;
  tipo_documento: string;
  numero_documento: string;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
}

export interface PreinscripcionResponse {
  id: number;
  oferta_programa_id: number;
  estado: string;
}
