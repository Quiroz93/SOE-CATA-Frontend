Realiza un proceso automatizado completo de auditoría, diagnóstico y plan de alineación del Frontend con la API pública versionada /api/v1 del Backend.

Contexto obligatorio del Backend (no asumir estructura anterior):

- Existe versionado estructural en la entidad OfertaPrograma.
- Preinscrito depende exclusivamente de oferta_programa_id.
- La API pública expone:

  GET /api/v1/ofertas
  GET /api/v1/ofertas/{id}
  GET /api/v1/programas
  GET /api/v1/programas/{slug}
  POST /api/v1/preinscripciones

- Solo deben visualizarse:
  - Ofertas activas
  - OfertaPrograma activo
  - Programas publicados
- La API usa API Resources.
- No se exponen campos internos (version, deleted_at, timestamps).
- Cupos, fechas, instructor y modalidad pertenecen a OfertaPrograma (versión), NO al programa.

------------------------------------------------------------
FASE 1 — DIAGNÓSTICO AUTOMÁTICO
------------------------------------------------------------

1. Identificar:
   - Framework y versión (Vue 2, Vue 3, Vite, etc.)
   - Uso de Pinia o Vuex
   - Uso de Tailwind
   - Cliente HTTP centralizado
   - Configuración de baseURL en variables de entorno

2. Mapear consumo actual de endpoints:
   - Detectar si se consume /api/v1/ofertas
   - Detectar si aún se depende de programa_id
   - Detectar estructura JSON asumida por el frontend

3. Analizar flujo actual:
   - Listado actual (¿programas o ofertas?)
   - Detalle actual
   - Flujo de preinscripción
   - Parámetro enviado al backend

4. Detectar brechas contra el modelo real:
   Dominio correcto:
   Oferta → OfertaPrograma → Programa → Instructor → RedFormacion

------------------------------------------------------------
FASE 2 — VALIDACIÓN DE VERSIONADO
------------------------------------------------------------

Verificar si el Frontend:

- Usa explícitamente oferta_programa_id.
- Está preparado para múltiples versiones.
- Evita usar programa_id para inscripciones.
- No asume que cupos pertenecen a programa.
- No asume que instructor pertenece a programa.

Si detecta acoplamiento incorrecto, listarlo claramente.

------------------------------------------------------------
FASE 3 — ANÁLISIS DE VISTAS
------------------------------------------------------------

Determinar si existen:

- OfertasList.vue
- OfertaDetalle.vue
- PreinscripcionForm.vue

Validar que las vistas muestren:

- Nombre del programa
- Red tecnológica
- Instructor
- Cupos disponibles
- Fechas
- Modalidad
- Municipio o centro (si aplica)

Verificar uso de loading states.
Verificar manejo de errores 422, 409, 400, 429.

------------------------------------------------------------
FASE 4 — PROPUESTA DE ARQUITECTURA CORRECTA
------------------------------------------------------------

Proponer sin aplicar cambios:

1. Estructura ideal de carpetas por dominio:

   /modules/ofertas
   /modules/programas
   /modules/preinscripcion
   /core/http

2. Servicio obligatorio:

   services/ofertas.service.ts
   - getOfertas()
   - getOfertaDetalle(id)

3. Flujo correcto:

   OfertasList → OfertaDetalle → PreinscripcionForm

4. Interface TypeScript recomendada:

   interface OfertaPrograma {
      id: number
      cupos: number
      fecha_inicio: string
      fecha_fin: string
      modalidad: string
      programa: {
         id: number
         nombre: string
         red_formacion: {
            nombre: string
         }
      }
      instructor: {
         nombre: string
      }
   }

5. Store recomendado (Pinia):
   - state: ofertas, ofertaSeleccionada, loading, error
   - actions: fetchOfertas, fetchDetalle
   - getters: ofertasActivas

------------------------------------------------------------
FASE 5 — PLAN DE REFACTOR CONTROLADO
------------------------------------------------------------

Generar plan por etapas:

Etapa 1: Implementar consumo real de /api/v1/ofertas.
Etapa 2: Reemplazar dependencia de programa_id por oferta_programa_id.
Etapa 3: Refactorizar formulario de preinscripción.
Etapa 4: Implementar manejo global de errores.
Etapa 5: Validar responsive.

NO aplicar código.
NO generar parches.
NO modificar archivos.
Solo generar plan técnico estructural detallado.

------------------------------------------------------------
FASE 6 — RESULTADO FINAL
------------------------------------------------------------

Entregar:

1. Nivel real de compatibilidad (Bajo / Medio / Alto).
2. Mapa de brechas estructurales.
3. Riesgos si no se alinea con versionado.
4. Arquitectura ideal recomendada.
5. Plan de implementación por prioridad.
6. Evaluación de escalabilidad futura.

------------------------------------------------------------

Objetivo final:
Alinear completamente el Frontend con el modelo versionado del Backend,
garantizando coherencia histórica, integridad de cupos, instructor correcto,
y consumo limpio de la API pública v1.








FASE de - EJECUCION DE ACOPLAMIENTO

Continuar con la implementación del Frontend para alinearlo completamente con la API pública versionada /api/v1 del Backend.

IMPORTANTE:
- No realizar parches rápidos.
- No modificar código innecesariamente.
- Implementar por etapas controladas.
- Mantener arquitectura limpia y modular.
- Respetar el dominio real:
  
  Oferta → OfertaPrograma (versionada) → Programa → Instructor → RedFormacion

El frontend NO debe inscribirse a Programa.
Debe inscribirse exclusivamente a oferta_programa_id.

────────────────────────────────────────────
ETAPA 1 — CONFIGURACIÓN BASE
────────────────────────────────────────────

1. Confirmar uso de Vue 3.
2. Si no existe store centralizado, instalar y configurar Pinia.
3. Centralizar baseURL en variable de entorno:

   VITE_API_BASE_URL=/api/v1

4. Confirmar que http.client.ts use esa variable.

No modificar lógica aún. Solo asegurar base sólida.

────────────────────────────────────────────
ETAPA 2 — MÓDULO OFERTAS
────────────────────────────────────────────

Crear estructura modular:

/modules/ofertas
   /services/ofertas.service.ts
   /store/ofertas.store.ts
   /views/OfertasList.vue
   /views/OfertaDetalle.vue
   /components/OfertaCard.vue

Implementar:

services/ofertas.service.ts:
- getOfertas()
- getOfertaDetalle(id)

Consumir exclusivamente:
GET /api/v1/ofertas
GET /api/v1/ofertas/{id}

No consumir programas para listado principal.

────────────────────────────────────────────
ETAPA 3 — STORE VERSIONADO (PINIA)
────────────────────────────────────────────

Crear store:

state:
- ofertas: OfertaPrograma[]
- ofertaSeleccionada: OfertaPrograma | null
- loading: boolean
- error: string | null

actions:
- fetchOfertas()
- fetchOfertaDetalle(id)

getters:
- ofertasActivas

La interface obligatoria:

interface OfertaPrograma {
  id: number
  cupos: number
  fecha_inicio: string
  fecha_fin: string
  modalidad: string
  programa: {
    id: number
    nombre: string
    red_formacion: {
      nombre: string
    }
  }
  instructor: {
    nombre: string
  }
}

NO incluir campos internos del backend.

────────────────────────────────────────────
ETAPA 4 — FLUJO CORRECTO
────────────────────────────────────────────

Implementar flujo:

OfertasList → OfertaDetalle → PreinscripcionForm

OfertasList:
- Mostrar cards basadas en OfertaPrograma
- Mostrar:
  - nombre del programa
  - red tecnológica
  - instructor
  - cupos
  - modalidad
  - fechas

OfertaDetalle:
- Mostrar información ampliada
- Botón “Preinscribirme”

PreinscripcionForm:
- Recibir oferta_programa_id como prop
- Enviar exclusivamente oferta_programa_id
- NO usar programa_id

────────────────────────────────────────────
ETAPA 5 — REFACTOR DE PREINSCRIPCIÓN
────────────────────────────────────────────

Actualizar PreinscripcionForm.vue:

Enviar:

POST /api/v1/preinscripciones
{
   oferta_programa_id,
   tipo_documento,
   numero_documento,
   nombres,
   apellidos,
   email,
   telefono
}

Implementar manejo de:

422 → mostrar errores por campo
409 → mensaje “Ya existe una preinscripción”
400 → mensaje “Cupos agotados”
429 → mensaje “Demasiadas solicitudes”

Deshabilitar botón si cupos = 0.

────────────────────────────────────────────
ETAPA 6 — MANEJO GLOBAL DE ERRORES
────────────────────────────────────────────

Implementar interceptor global en http.client.ts:

- Capturar errores.
- Normalizar estructura de error.
- Enviar mensaje limpio al store.

Agregar estados:
- loading
- error
- success

────────────────────────────────────────────
ETAPA 7 — VALIDACIÓN RESPONSIVE
────────────────────────────────────────────

Verificar:

- Cards no se superponen.
- Grid responsivo.
- Botones accesibles.
- Formularios no se rompen en móvil.

Usar Tailwind correctamente.

────────────────────────────────────────────
ETAPA 8 — VALIDACIÓN FINAL
────────────────────────────────────────────

Confirmar que:

✔ No existe uso de programa_id en inscripción.
✔ Todo depende de oferta_programa_id.
✔ Solo se muestran ofertas activas.
✔ Instructor pertenece a OfertaPrograma.
✔ Cupos pertenecen a OfertaPrograma.
✔ Flujo completo funciona sin depender de modelo antiguo.

────────────────────────────────────────────
RESULTADO ESPERADO
────────────────────────────────────────────

- Frontend completamente alineado al versionado estructural.
- Sin acoplamiento incorrecto.
- Arquitectura modular.
- Escalable.
- Lista para crecimiento institucional.