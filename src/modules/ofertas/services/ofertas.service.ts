import http from '@/core/http/http.client';
import type { ApiResponse } from '@/types/api.types';
import type { Oferta, OfertaPrograma } from '../types/oferta.types';

export async function getOfertas(): Promise<Oferta[]> {
  const response = await http.get<ApiResponse<Oferta[]>>('/api/v1/public/ofertas');
  return response.data.data;
}

export async function getOfertaDetalle(slug: string): Promise<Oferta> {
  const response = await http.get<ApiResponse<Oferta>>(`/api/v1/public/ofertas/${slug}`);
  return response.data.data;
}

export async function getProgramasPorOferta(slug: string): Promise<OfertaPrograma[]> {
  const response = await http.get<ApiResponse<OfertaPrograma[]>>(`/api/v1/public/ofertas/${slug}/programas`);
  return response.data.data;
}
