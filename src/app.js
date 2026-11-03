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
import { initBackgroundMusic } from './components/audioPlayer.js';

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

function initResponsiveHeroVideo() {
  const heroVideo = document.getElementById('hero-brand-video');
  if (!heroVideo || typeof window.matchMedia !== 'function') return;

  const mobileQuery = window.matchMedia('(max-width: 639px)');
  const applyVideoSource = (isMobile) => {
    const targetSrc = isMobile
      ? heroVideo.getAttribute('data-mobile-src')
      : heroVideo.getAttribute('data-desktop-src');
    if (targetSrc && heroVideo.getAttribute('src') !== targetSrc) {
      const currentTime = heroVideo.currentTime || 0;
      heroVideo.setAttribute('src', targetSrc);
      heroVideo.load();
      if (currentTime > 0) {
        heroVideo.addEventListener(
          'loadedmetadata',
          () => {
            if (currentTime < heroVideo.duration) {
              heroVideo.currentTime = currentTime;
            }
          },
          { once: true }
        );
      }
      const playPromise = heroVideo.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    }
  };

  applyVideoSource(mobileQuery.matches);
  if (typeof mobileQuery.addEventListener === 'function') {
    mobileQuery.addEventListener('change', (e) => applyVideoSource(e.matches));
  }
}

function bootstrap() {
  syncWhatsAppLinks();
  initResponsiveHeroVideo();
  initNavigation();
  initGalleryAndInteractiveModules();
  initLightbox();
  initAnimations();
  initBackgroundMusic();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
