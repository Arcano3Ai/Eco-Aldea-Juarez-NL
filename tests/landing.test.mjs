import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('1. Configuración editable local (src/data/siteContent.js) e integridad de datos', async () => {
  const { SITE_CONTENT } = await import('../src/data/siteContent.js');
  assert.ok(SITE_CONTENT, 'SITE_CONTENT debe exportarse desde src/data/siteContent.js');

  // Identidad y Contacto WhatsApp
  assert.equal(SITE_CONTENT.brand.name, 'ECO ALDEA JUÁREZ NL');
  assert.equal(SITE_CONTENT.whatsapp.displayPhone, '8117164618');
  assert.equal(SITE_CONTENT.whatsapp.countryPhone, '528117164618');
  assert.equal(SITE_CONTENT.whatsapp.baseUrl, 'https://wa.me/528117164618');
  assert.equal(
    SITE_CONTENT.whatsapp.defaultMessage,
    'Hola, conocí Eco Aldea Juárez NL a través de su página web y me gustaría conocer más sobre el proyecto y cómo puedo participar.'
  );

  // Hero Section
  assert.equal(SITE_CONTENT.hero.eyebrow, 'ECO ALDEA JUÁREZ NL');
  assert.equal(SITE_CONTENT.hero.title, 'Volvamos a conectar con la tierra.');
  assert.equal(SITE_CONTENT.hero.primaryCta, 'CONOCE NUESTRO PROYECTO');
  assert.equal(SITE_CONTENT.hero.secondaryCta, 'QUIERO PARTICIPAR');

  // Filosofía
  assert.equal(
    SITE_CONTENT.philosophy.title,
    'Una semilla puede transformar mucho más que un jardín.'
  );

  // 6 Áreas de Construcción (exactas y sin servicios comerciales falsos)
  assert.equal(SITE_CONTENT.areas.items.length, 6);
  const expectedAreas = [
    'CULTURA DE LA TIERRA',
    'CONSERVACIÓN DE SEMILLAS',
    'COMUNIDAD Y COLABORACIÓN',
    'APRENDIZAJE ECOLÓGICO',
    'CONVIVENCIA CON LA NATURALEZA',
    'PARTICIPACIÓN VOLUNTARIA'
  ];
  assert.deepEqual(
    SITE_CONTENT.areas.items.map((a) => a.title),
    expectedAreas
  );

  // Actividades
  assert.equal(
    SITE_CONTENT.activities.title,
    'Las ideas cobran vida cuando trabajamos juntos.'
  );
  assert.ok(SITE_CONTENT.activities.items.length >= 6);

  // Comunidad
  assert.equal(
    SITE_CONTENT.community.title,
    'Este proyecto también puede crecer contigo.'
  );
  assert.equal(
    SITE_CONTENT.community.ctaText,
    'QUIERO SER PARTE DE ECO ALDEA'
  );

  // Conversión / Únete
  assert.equal(
    SITE_CONTENT.join.title,
    'El futuro se cultiva entre todos.'
  );
  assert.equal(
    SITE_CONTENT.join.ctaText,
    'CONTACTAR POR WHATSAPP'
  );

  // Footer y Créditos
  assert.equal(
    SITE_CONTENT.footer.tagline,
    'Cultivando comunidad, conciencia y conexión con la naturaleza.'
  );
  assert.equal(
    SITE_CONTENT.footer.credits,
    'Iniciativa de apoyo digital por ARCANO SOLUTIONS.'
  );

  // Zona de Niños, Zona de Cursos y Blog
  assert.ok(SITE_CONTENT.kidsZone, 'Debe incluir la configuración de Zona de Niños');
  assert.equal(SITE_CONTENT.kidsZone.activities.length, 4);
  assert.equal(SITE_CONTENT.kidsZone.quiz.length, 3);
  assert.ok(SITE_CONTENT.courses, 'Debe incluir la configuración de Zona de Cursos y Talleres');
  assert.equal(SITE_CONTENT.courses.items.length, 4);
  assert.ok(SITE_CONTENT.blog, 'Debe incluir la configuración de Blog y Saberes');
  assert.equal(SITE_CONTENT.blog.articles.length, 4);
  assert.ok(SITE_CONTENT.faq, 'Debe incluir la sección de Preguntas Frecuentes');
});

test('2. Generador de enlaces WhatsApp (src/utils/whatsapp.js)', async () => {
  const { buildWhatsAppUrl } = await import('../src/utils/whatsapp.js');
  const url = buildWhatsAppUrl();
  assert.ok(url.startsWith('https://wa.me/528117164618?text='));
  const parsed = new URL(url);
  assert.equal(
    parsed.searchParams.get('text'),
    'Hola, conocí Eco Aldea Juárez NL a través de su página web y me gustaría conocer más sobre el proyecto y cómo puedo participar.'
  );
});

test('3. Existencia física de todas las fotografías locales y activos de Identidad de Marca', async () => {
  const { SITE_CONTENT } = await import('../src/data/siteContent.js');
  const imagePaths = [
    SITE_CONTENT.brand.primaryLogo,
    SITE_CONTENT.brand.darkModeLogo,
    SITE_CONTENT.brand.stampLogo,
    SITE_CONTENT.brand.secondarySeedIcon,
    SITE_CONTENT.brand.favicon,
    SITE_CONTENT.brand.ogShareImage,
    ...SITE_CONTENT.brand.pillarIcons,
    ...SITE_CONTENT.brand.patterns,
    SITE_CONTENT.hero.backgroundImage,
    ...SITE_CONTENT.hero.parallaxBackgrounds,
    SITE_CONTENT.philosophy.mainImage,
    SITE_CONTENT.philosophy.secondaryImage,
    SITE_CONTENT.community.image,
    ...SITE_CONTENT.activities.items.map((i) => i.src),
    ...SITE_CONTENT.historyGallery.items.map((i) => i.src)
  ];

  assert.equal(SITE_CONTENT.brand.pillarIcons.length, 6, 'Debe incluir los 6 medallones oficiales de pilares');
  assert.equal(SITE_CONTENT.brand.patterns.length, 3, 'Debe incluir los 3 patrones oficiales de marca');

  assert.equal(SITE_CONTENT.hero.parallaxBackgrounds.length, 3, 'Debe incluir las 3 imágenes de fondo parallax');
  for (const pBg of SITE_CONTENT.hero.parallaxBackgrounds) {
    const absP = path.resolve(ROOT, pBg);
    assert.ok(fs.existsSync(absP), `Imagen parallax debe existir: ${pBg}`);
    assert.ok(fs.statSync(absP).size < 80 * 1024, `Imagen parallax debe ser ligera (<80KB): ${pBg}`);
  }

  for (const relPath of imagePaths) {
    const absPath = path.resolve(ROOT, relPath);
    assert.ok(
      fs.existsSync(absPath),
      `La imagen local referenciada debe existir en disco: ${relPath}`
    );
    const stat = fs.statSync(absPath);
    assert.ok(stat.size > 1000, `La imagen ${relPath} no debe estar vacía`);
  }
});

test('4. HTML Semántico, SEO, Open Graph, Accesibilidad y Ausencia de Backend/Formularios', () => {
  const htmlPath = path.resolve(ROOT, 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html debe existir');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // SEO requerido
  assert.match(
    html,
    /<title>Eco Aldea Juárez NL \| Comunidad y Proyecto Ecológico<\/title>/
  );
  assert.match(html, /<meta\s+name="description"\s+content="[^"]*Juárez,\s*Nuevo León[^"]*"/i);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /property="og:image"\s+content="assets\/images\/brand\/og-whatsapp-share\.jpg"/);
  assert.match(html, /property="og:image:width"\s+content="1200"/);
  assert.match(html, /property="og:image:height"\s+content="630"/);

  // Jerarquía de encabezados y textos clave
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  assert.equal(h1Matches.length, 1, 'Debe existir exactamente un encabezado <h1>');
  assert.ok(html.includes('Volvamos a conectar con la tierra.'));
  assert.ok(html.includes('Una semilla puede transformar mucho más que un jardín.'));
  assert.ok(html.includes('Las ideas cobran vida cuando trabajamos juntos.'));
  assert.ok(html.includes('Este proyecto también puede crecer contigo.'));
  assert.ok(html.includes('El futuro se cultiva entre todos.'));
  assert.ok(html.includes('Iniciativa de apoyo digital por ARCANO SOLUTIONS.'));

  // Todas las etiquetas <img> deben tener atributo alt no vacío y src 100% único (cero imágenes repetidas)
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  assert.ok(imgTags.length >= 20, 'Debe incluir todas las imágenes únicas del proyecto y galerías');
  const seenSrcs = new Map();
  for (const tag of imgTags) {
    assert.match(tag, /\balt="[^"]+"/i, `Cada <img> debe tener texto ALT descriptivo: ${tag}`);
    const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
    assert.ok(srcMatch, `Cada <img> debe tener atributo src: ${tag}`);
    const src = srcMatch[1];
    assert.equal(
      seenSrcs.has(src),
      false,
      `PROHIBIDO REPETIR IMÁGENES: la imagen "${src}" está duplicada en index.html`
    );
    seenSrcs.set(src, true);
  }

  // Lightbox, video hero 720x720, música ambiental autoplay y botón flotante de WhatsApp
  assert.match(html, /id="lightbox-modal"/);
  assert.match(html, /role="dialog"/);
  assert.match(html, /id="hero-brand-video"[^>]*src="assets\/video\/hero-eco-aldea\.mp4"/i);
  assert.doesNotMatch(html, /class="hero-video-frame"/i, 'El video debe ocupar todo el Hero sin caja contenedora');
  assert.doesNotMatch(html, /class="hero-overlay"/i, 'El Hero de video no debe tener capa de opacidad encima');
  assert.ok(
    fs.existsSync(path.resolve(ROOT, 'assets/video/hero-eco-aldea.mp4')),
    'El video oficial del Hero assets/video/hero-eco-aldea.mp4 debe existir en disco'
  );
  assert.match(html, /class="[^"]*hero-floating-cta-dock[^"]*"/);
  assert.match(html, /id="bg-music-audio"[^>]*src="assets\/audio\/eco-ecoaldea\.mp3"[^>]*autoplay/i);
  assert.ok(
    fs.existsSync(path.resolve(ROOT, 'assets/audio/eco-ecoaldea.mp3')),
    'El archivo de música oficial assets/audio/eco-ecoaldea.mp3 debe existir en disco'
  );
  assert.match(html, /class="[^"]*floating-whatsapp[^"]*"/);
  assert.ok(html.includes('https://wa.me/528117164618'));

  // Prohibición estricta de formularios de captura de datos / login / pagos
  assert.doesNotMatch(html, /<input\s+type="password"/i);
  assert.doesNotMatch(html, /checkout|stripe|paypal/i);
});

test('5. Sistema de Diseño CSS Mobile-First y Paleta Orgánica', () => {
  const cssPath = path.resolve(ROOT, 'src/styles/main.css');
  assert.ok(fs.existsSync(cssPath), 'src/styles/main.css debe existir');
  const css = fs.readFileSync(cssPath, 'utf8');

  // Variables de paleta cromática oficial Brand Style Guide v1.0
  assert.match(css, /--forest-deep:/);
  assert.match(css, /--forest-brand:\s*#264A31/i);
  assert.match(css, /--earth-terracotta:\s*#B86B4B/i);
  assert.match(css, /--sun-amber:\s*#E8A838/i);
  assert.match(css, /--soil-brown:\s*#5C4024/i);
  assert.match(css, /--warm-white:\s*#F9F6EE/i);
  assert.match(css, /--olive-earth:/);
  assert.match(css, /--sage-soft:/);
  assert.match(css, /--sand-beige:/);
  assert.match(css, /--earth-clay:/);
  assert.match(css, /Montserrat/);

  // Prevención de overflow horizontal y soporte de movimiento reducido
  assert.match(css, /overflow-x:\s*hidden/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.hero-brand-video\s*\{[^}]*opacity:\s*1/s);
  assert.match(css, /\.hero-brand-video\s*\{[^}]*filter:\s*none/s);
});

test('6. Verificación E2E de servidor estático y carga HTTP 200 de todos los recursos', async () => {
  const { createStaticServer } = await import('../scripts/serve.mjs');
  const server = createStaticServer();

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    const resHtml = await fetch(`${baseUrl}/`);
    assert.equal(resHtml.status, 200);
    const html = await resHtml.text();

    const resCss = await fetch(`${baseUrl}/src/styles/main.css`);
    assert.equal(resCss.status, 200);
    await resCss.text();

    const resJs = await fetch(`${baseUrl}/src/app.js`);
    assert.equal(resJs.status, 200);
    await resJs.text();

    // Extraer todos los atributos src="assets/..." del HTML y verificar respuesta 200
    const srcMatches = [...html.matchAll(/src="(assets\/[^"]+)"/g)].map((m) => m[1]);
    assert.ok(srcMatches.length >= 25);

    for (const assetPath of srcMatches) {
      const resAsset = await fetch(`${baseUrl}/${assetPath}`);
      assert.equal(resAsset.status, 200, `Recurso debe responder 200 OK: ${assetPath}`);
      await resAsset.arrayBuffer();
    }
  } finally {
    server.closeAllConnections?.();
    await new Promise((resolve) => server.close(resolve));
  }
});

