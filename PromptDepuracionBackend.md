# Prompt para depuración de error 500 en GET /programas

## Objetivo
Identificar y solucionar el error 500 que impide que el endpoint GET /programas retorne correctamente la lista de programas con el campo `slug`.

## Pasos sugeridos para depuración

1. **Reproducir el error**
   - Realiza una petición a `/programas` usando Postman, Insomnia o curl.
   - Confirma que el error 500 persiste y copia el mensaje de error si está disponible.

2. **Revisar logs del backend**
   - Busca en los logs del servidor (por ejemplo, `storage/logs/laravel.log` en Laravel) el stacktrace o mensaje de error relacionado con la petición.
   - Identifica el archivo y la línea donde ocurre el fallo.

3. **Verificar el modelo Programa**
   - Asegúrate de que el modelo tiene el campo `slug` definido y correctamente poblado.

4. **Revisar el controlador del endpoint**
   - Verifica que el método que responde a GET /programas retorna los programas correctamente y no hay errores de sintaxis o lógica.

5. **Validar el recurso/serializador**
   - Si usas un recurso (Resource), asegúrate de que el campo `slug` está incluido en el array de retorno:
     ```php
     public function toArray($request)
     {
         return [
             'id' => $this->id,
             'nombre' => $this->nombre,
             'slug' => $this->slug,
             // ...otros campos
         ];
     }
     ```

6. **Probar la consulta directamente**
   - Ejecuta la consulta en Tinker (Laravel) o en la consola de base de datos para verificar que los datos existen y el campo `slug` está poblado.

7. **Verificar migraciones y datos**
   - Asegúrate de que la columna `slug` existe en la base de datos y que los registros tienen valores válidos.

8. **Limpiar caché y reiniciar servidor**
   - Ejecuta comandos como `php artisan config:clear`, `php artisan cache:clear` y reinicia el servidor si es necesario.

9. **Volver a probar el endpoint**
   - Realiza nuevamente la petición a `/programas` y verifica que la respuesta sea exitosa y contenga el campo `slug`.

## Notas
- Si el error persiste, adjunta el mensaje de error completo y el stacktrace para análisis adicional.
- Si usas otro framework, adapta los pasos según corresponda.
