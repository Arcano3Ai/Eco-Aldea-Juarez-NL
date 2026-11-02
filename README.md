# ECO ALDEA JUÁREZ NL — Landing Page Institucional

Landing page comunitaria, ecológica y editorial desarrollada como **iniciativa de apoyo digital por ARCANO SOLUTIONS**.

## Características principales
- **100 % Frontend Estático y Modular:** Sin backend, sin bases de datos, sin formularios de captura ni pasarelas de pago.
- **Dirección de Arte Orgánica y Editorial:** Paleta cromática inspirada en el bosque, tierra, verde oliva, verde salvia, beige arena y luz solar cálida (`Fraunces` + `Plus Jakarta Sans`).
- **Fotografías Locales y Registro Real:**
  - `assets/images/comunidad/`: Fotografías reales proporcionadas por **Eco Aldea Juárez NL** (cosecha y conservación de semillas, fogatas nocturnas, espacios bajo los árboles, camas de cultivo en madera reutilizada y cuidado de aves).
  - `assets/images/editorial/`: Fotografías ambientales de apoyo visual para el Hero y la sección de Filosofía.
- **Experiencia Interactiva:**
  - Navbar transparente con transición al hacer scroll, ScrollSpy y menú hamburguesa móvil accesible.
  - Módulo interactivo del **Ciclo de Conservación de Semillas** (4 etapas).
  - Galería de Actividades con **filtrado dinámico por categorías** y **Lightbox modal accesible** (con soporte de teclado `Escape`/`Flechas` y gestos `swipe` en móviles).
  - Mosaico editorial **Galería de Nuestra Historia**.
  - Enlace directo oficial a WhatsApp (`https://wa.me/528117164618`) con mensaje inicial preconfigurado y botón flotante persistente.

## Comandos rápidos

```bash
# Iniciar el servidor local en http://localhost:3000
npm start

# Ejecutar la suite de pruebas automatizadas (TDD + E2E HTTP)
npm test
```

## Cómo actualizar textos o fotografías locales
1. **Fotografías:** Reemplaza o agrega imágenes dentro de `assets/images/comunidad/`.
2. **Textos y Configuración:** Edita `src/data/siteContent.js` y/o las tarjetas correspondientes en `index.html`.

