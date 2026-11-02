/**
 * @fileoverview Punto de entrada principal del frontend de ECO ALDEA JUÁREZ NL.
 * Inicializa navegación, galerías interactivas, lightbox accesible, animaciones
 * y vinculación de enlaces directos a WhatsApp desde la configuración central.
 */

import { buildWhatsAppUrl } from './utils/whatsapp.js';
import { initNavigation } from './components/navigation.js';
import { initLightbox } from './components/lightbox.js';
import { initGalleryAndInteractiveModules } from './components/galleryRenderer.js';
import { initAnimations } from './components/animations.js';

function syncWhatsAppLinks() {
  const officialUrl = buildWhatsAppUrl();
  const whatsappButtons = document.querySelectorAll('[data-whatsapp-cta]');
  whatsappButtons.forEach((anchor) => {
    const customMsg = anchor.getAttribute('data-whatsapp-message');
    anchor.setAttribute('href', customMsg ? buildWhatsAppUrl(customMsg) : officialUrl);
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
  });
}

function bootstrap() {
  syncWhatsAppLinks();
  initNavigation();
  initGalleryAndInteractiveModules();
  initLightbox();
  initAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
