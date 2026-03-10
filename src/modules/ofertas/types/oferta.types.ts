export interface ProgramaResumen {
  id: number;
  nombre: string;
  descripcion?: string;
  slug?: string;
}

export interface InstructorResumen {
  id?: number;
  nombre: string;
  perfil_descriptivo?: string;
}

export interface OfertaPrograma {
  cupos: number;
  modalidad: string;
  municipio?: string;
  programa: ProgramaResumen;
  instructor: InstructorResumen;
}

export interface Oferta {
  id: number;
  slug: string;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: string | number;
  programas: OfertaPrograma[];
}

export interface OfertaCardItem {
  ofertaId: number;
  ofertaSlug: string;
  ofertaNombre: string;
  ofertaDescripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: string | number;
  cupos: number;
  modalidad: string;
  municipio?: string;
  programa: ProgramaResumen;
  instructor: InstructorResumen;
}
