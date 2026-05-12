# Cuestionario de la Actividad 10: “Caza errores”

## Datos del estudiante

- Nombre completo:
- Grupo:
- Fecha:
- Nombre del proyecto revisado:

---

# Parte A. Reconocimiento de sintaxis y estructura HTML

Responde con tus propias palabras. Cuando sea necesario, copia el fragmento de código corregido.

## 1. Estructura básica

¿Cuáles son las partes mínimas que debe tener un archivo HTML para que el navegador lo interprete correctamente?

**Respuesta:**


---

## 2. Etiquetas y cierre correcto

Explica qué puede ocurrir en una página web cuando una etiqueta HTML queda mal cerrada o mal anidada.

**Respuesta:**


---

## 3. Rutas de archivos

En el proyecto, algunos recursos no cargan correctamente. Explica qué es una ruta de archivo y por qué una ruta incorrecta puede impedir que aparezca una imagen, un estilo o un script.

**Respuesta:**


---

## 4. Enlace de CSS

Observa este fragmento:

```html
<link rel="stylesheet" href="css/style.css">
```

Si el archivo real se llama `styles.css`, ¿cuál es el error y cómo se corrige?

**Respuesta:**


---

## 5. Atributos HTML

Explica para qué sirven los atributos `src`, `href`, `id`, `class` y `alt`.

**Respuesta:**


---

# Parte B. Reconocimiento de errores frecuentes en CSS

## 6. Selectores CSS

¿Cuál es la diferencia entre un selector de clase y un selector de identificador?

Incluye un ejemplo de cada uno.

**Respuesta:**


---

## 7. Clases mal escritas

Si en HTML aparece:

```html
<div class="hero-contnet">
```

pero en CSS aparece:

```css
.hero-content {
  max-width: 600px;
}
```

¿Qué problema se genera y cómo se corrige?

**Respuesta:**


---

## 8. Propiedades inválidas

Observa este fragmento:

```css
.menu-grid {
  display: grips;
}
```

¿Qué error tiene y cuál debe ser la corrección?

**Respuesta:**


---

## 9. Variables CSS

Observa este fragmento:

```css
.primary {
  background: linear-gradient(135deg, var(--dorado), var(--coral));
}
```

Si la variable `--dorado` no existe, ¿qué efecto puede tener en el diseño? ¿Cómo lo diagnosticarías?

**Respuesta:**


---

## 10. Diseño responsive

¿Qué función cumple una media query en CSS? Explica qué error tiene este ejemplo:

```css
@media (max-wdith: 760px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
```

**Respuesta:**


---

# Parte C. Diagnóstico técnico

## 11. Herramientas del navegador

Menciona tres herramientas o pestañas del navegador que puedes usar para diagnosticar errores y explica para qué sirve cada una.

**Respuesta:**


---

## 12. Error 404

¿Qué significa que en la pestaña Network/Red aparezca un error 404 al cargar un archivo CSS, JS o una imagen?

**Respuesta:**


---

## 13. Consola del navegador

¿Para qué sirve la consola del navegador durante la corrección de un proyecto web?

**Respuesta:**


---

## 14. Método de corrección

¿Por qué no es recomendable corregir todos los errores al mismo tiempo sin probar cada cambio?

**Respuesta:**


---

# Parte D. Documentación y buenas prácticas

## 15. Bitácora técnica

¿Qué información debe contener una buena bitácora de errores?

**Respuesta:**


---

## 16. Buenas prácticas

Escribe cinco buenas prácticas que aplicarías en tus próximos proyectos HTML y CSS para evitar errores similares.

**Respuesta:**

1.
2.
3.
4.
5.

---

## 17. Reflexión final

Después de corregir el proyecto, responde:

- ¿Qué error fue el más difícil de encontrar?
- ¿Qué aprendiste sobre la relación entre HTML, CSS y JavaScript?
- ¿Qué harías diferente al crear tu próximo proyecto web?

**Respuesta:**


