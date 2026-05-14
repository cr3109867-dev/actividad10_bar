Actividad 10 — “Caza errores”

Estudiante: Cristian Ramírez
Fecha: 2026
Herramientas utilizadas: Visual Studio Code, Google Chrome, Live Server y DevTools.


1. Introducción

Durante esta actividad se realizó el diagnóstico y corrección de errores presentes en el proyecto web “Origen Bar de Autor”. Se revisaron archivos HTML, CSS y JavaScript utilizando observación visual, análisis manual del código y herramientas del navegador como la consola, inspector y pestaña Network.

El objetivo fue identificar errores de sintaxis, rutas incorrectas, problemas de estilos e interactividad, logrando finalmente que el sitio funcionara correctamente.

2. Registro de errores encontrados


| Error | Archivo    | Problema encontrado                | Diagnóstico técnico              | Corrección aplicada                                  | Resultado                         |
| ----- | ---------- | ---------------------------------- | -------------------------------- | ---------------------------------------------------- | --------------------------------- |
| 01    | index.html | El CSS no cargaba                  | Ruta incorrecta del archivo CSS  | Se cambió `css/style.css` por `css/styles.css`       | Estilos funcionando correctamente |
| 02    | index.html | El logo no aparecía                | Ruta equivocada de imágenes      | Se corrigió `assets/image/` por `assets/img/`        | Logo visible                      |
| 03    | index.html | El enlace Carta no funcionaba      | El id `menu` no existía          | Se cambió `#menu` por `#carta`                       | Navegación funcionando            |
| 04    | index.html | Estilos del hero no se aplicaban   | Clase HTML mal escrita           | Se corrigió `hero-contnet` por `hero-content`        | Diseño corregido                  |
| 05    | index.html | Botón Reservar no funcionaba       | Nombre incorrecto de función JS  | Se cambió `reservaMesa()` por `reservarMesa()`       | Scroll funcionando                |
| 06    | index.html | Formulario no detectado            | ID incorrecto del formulario     | Se corrigió `reservationFormm` por `reservationForm` | Formulario reconocido             |
| 07    | index.html | Validación del teléfono fallaba    | JS buscaba un ID diferente       | Se cambió `phone` por `telefono`                     | Validación correcta               |
| 08    | index.html | JavaScript no cargaba              | Ruta incorrecta del script       | Se cambió `js/main.js` por `js/app.js`               | JS ejecutándose                   |
| 09    | styles.css | Botón principal sin color correcto | Variable CSS inexistente         | Se reemplazó `--dorado` por `--gold`                 | Estilos restaurados               |
| 10    | styles.css | Tarjetas desordenadas              | Error en propiedad display       | Se corrigió `grips` por `grid`                       | Grid funcionando                  |
| 11    | styles.css | Responsive no funcionaba           | Error ortográfico en media query | Se cambió `max-wdith` por `max-width`                | Adaptación móvil correcta         |
| 12    | app.js     | JavaScript completamente roto      | Cadena de texto sin cerrar       | Se cerró correctamente el string                     | JS funcionando                    |


3. Herramientas de diagnóstico utilizadas
Observación visual

Se revisó el comportamiento del sitio para detectar elementos que no cargaban correctamente, problemas visuales y botones sin funcionamiento.

Consola del navegador

Se utilizó la consola de Google Chrome para identificar errores de JavaScript y archivos que no estaban cargando.

Inspector de elementos

Permitió verificar clases HTML, estilos CSS y estructura visual del sitio.

Pestaña Network

Ayudó a detectar rutas incorrectas de archivos CSS, JS e imágenes.

4. Verificación final

Después de realizar todas las correcciones:

El sitio carga correctamente.
Los estilos CSS funcionan.
Las imágenes aparecen correctamente.
La navegación interna funciona.
El botón de reservas realiza scroll.
El formulario valida correctamente.
El diseño responsive funciona en dispositivos móviles.
No aparecen errores en consola.
5. Conclusión

La actividad permitió comprender la relación entre HTML, CSS y JavaScript dentro de un proyecto web. También ayudó a fortalecer habilidades de diagnóstico técnico, revisión de código y uso de herramientas de desarrollo del navegador.

La documentación de errores fue importante para mantener un control organizado de las correcciones realizadas y verificar que el proyecto funcionara correctamente después de cada cambio.

6. Reflexión final
1. ¿Cuál fue el error más difícil de encontrar y por qué?

El error más difícil fue el de JavaScript en app.js, porque una cadena de texto sin cerrar impedía que todo el archivo funcionara correctamente. Este tipo de error puede afectar muchas funcionalidades al mismo tiempo.

2. ¿Qué herramienta te ayudó más?

La consola del navegador fue la herramienta más útil porque mostraba mensajes claros sobre errores de JavaScript y archivos que no cargaban correctamente.

3. ¿Por qué es importante documentar los errores?

Porque permite llevar control de las correcciones realizadas, facilita el trabajo en equipo y ayuda a solucionar problemas futuros de manera más rápida.

4. ¿Qué buenas prácticas aplicarías en futuros proyectos?
Revisar rutas y nombres de archivos.
Mantener nombres claros y organizados.
Probar constantemente el proyecto.
Usar herramientas de inspección del navegador.
Documentar cambios importantes.
5. ¿Cómo se relacionan HTML, CSS y JavaScript?

HTML define la estructura del sitio, CSS controla el diseño visual y JavaScript agrega interactividad y comportamiento dinámico. Los tres trabajan juntos para construir aplicaciones web funcionales.

