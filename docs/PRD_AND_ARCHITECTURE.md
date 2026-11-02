# PRD & Plan de Arquitectura — ECO ALDEA JUÁREZ NL

## 1. Visión del Producto (PRD)
- **Proyecto:** Landing Page Institucional para **ECO ALDEA JUÁREZ NL** (Juárez / Monterrey, Nuevo León, México).
- **Iniciativa Social:** Desarrollado como iniciativa de apoyo digital por **ARCANO SOLUTIONS**.
- **Alcance Estricto:** Exclusivamente interfaz **Frontend Estática / Modular**. Cero backend, cero bases de datos, cero autenticación, cero formularios con almacenamiento, cero pasarelas de pago o reservas.
- **Integración Externa Única:** Enlace directo oficial a WhatsApp (`https://wa.me/528117164618?text=Hola%2C%20conoc%C3%AD%20Eco%20Aldea%20Ju%C3%A1rez%20NL%20a%20trav%C3%A9s%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20el%20proyecto%20y%20c%C3%B3mo%20puedo%20participar.`).
- **Ética Documental:** Uso de las fotografías reales proporcionadas por la comunidad (extraídas y optimizadas en `/assets/images/comunidad/`) para el registro documental de actividades e historia, sin inventar estadísticas, fechas falsas, certificaciones ni testimonios ficticios.

## 2. Arquitectura Técnica
```text
Eco Aldea Juarez NL/
├── index.html                        # Documento HTML5 semántico, SEO, Open Graph y estructura SSR-friendly
├── package.json                      # Configuración ES Modules y scripts de verificación TDD
├── assets/
│   └── images/
│       ├── comunidad/                # Fotografías reales proporcionadas por Eco Aldea Juárez NL
│       └── editorial/                # Fotografías ambientales de apoyo visual (Hero / Filosofía)
├── src/
│   ├── data/
│   │   └── siteContent.js            # Fuente única de verdad (editable localmente sin tocar lógica)
│   ├── utils/
│   │   └── whatsapp.js               # Generador puro y validado de enlaces profundos a WhatsApp
│   ├── components/
│   │   ├── navigation.js             # Navbar adaptable al scroll, scroll-spy y menú móvil accesible
│   │   ├── galleryRenderer.js        # Renderizado dinámico de Actividades y Mosaico de Historia con filtros
│   │   ├── lightbox.js               # Visor modal accesible con teclado, gestos táctiles y zoom
│   │   └── animations.js             # IntersectionObserver reveal y parallax ligero con rAF
│   ├── styles/
│   │   └── main.css                  # Sistema de diseño orgánico-editorial Mobile-First
│   └── app.js                        # Orquestador principal del frontend
└── tests/
    └── landing.test.mjs              # Suite TDD automatizada (SEO, contenido, WhatsApp, accesibilidad, imágenes)
```
