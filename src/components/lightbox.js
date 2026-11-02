/**
 * @fileoverview Visor Lightbox accesible para ampliar fotografías de Actividades e Historia.
 * Soporta navegación por teclado (Escape, Flechas), gestos táctiles (swipe) en móvil y zoom suave.
 */

export function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-description');
  const badgeEl = document.getElementById('lightbox-badge');
  const counterEl = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const backdrop = document.getElementById('lightbox-backdrop');

  if (!modal || !imgEl) return;

  let currentCollection = [];
  let currentIndex = 0;
  let lastFocusedElement = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const collectVisibleTriggers = (groupName) => {
    const selector = groupName
      ? `[data-lightbox-trigger][data-lightbox-group="${groupName}"]:not(.is-hidden)`
      : '[data-lightbox-trigger]:not(.is-hidden)';
    return Array.from(document.querySelectorAll(selector));
  };

  const renderSlide = (index) => {
    if (!currentCollection.length) return;
    currentIndex = (index + currentCollection.length) % currentCollection.length;
    const item = currentCollection[currentIndex];

    const src = item.getAttribute('data-lightbox-src') || '';
    const alt = item.getAttribute('data-lightbox-alt') || '';
    const title = item.getAttribute('data-lightbox-title') || '';
    const desc = item.getAttribute('data-lightbox-desc') || '';
    const badge = item.getAttribute('data-lightbox-badge') || 'Eco Aldea Juárez NL';

    imgEl.classList.add('is-transitioning');
    window.setTimeout(() => {
      imgEl.src = src;
      imgEl.alt = alt || title;
      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (badgeEl) badgeEl.textContent = badge;
      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
      }
      imgEl.classList.remove('is-transitioning');
    }, 110);
  };

  const openLightbox = (triggerEl) => {
    const group = triggerEl.getAttribute('data-lightbox-group') || '';
    currentCollection = collectVisibleTriggers(group);
    const idx = currentCollection.indexOf(triggerEl);
    currentIndex = idx >= 0 ? idx : 0;

    lastFocusedElement = document.activeElement;
    renderSlide(currentIndex);

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  // Delegación de eventos para cualquier tarjeta o botón con [data-lightbox-trigger]
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lightbox-trigger]');
    if (trigger) {
      event.preventDefault();
      openLightbox(trigger);
    }
  });

  // Soporte de teclado Enter/Space en tarjetas con foco
  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) {
      const trigger = event.target.closest?.('[data-lightbox-trigger]');
      if (trigger && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openLightbox(trigger);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      renderSlide(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      renderSlide(currentIndex - 1);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);
  backdrop?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => renderSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => renderSlide(currentIndex + 1));

  // Soporte táctil (Swipe izquierda/derecha en smartphones)
  modal.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal.addEventListener(
    'touchend',
    (event) => {
      touchEndX = event.changedTouches[0].screenX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 48) {
        if (delta < 0) {
          renderSlide(currentIndex + 1);
        } else {
          renderSlide(currentIndex - 1);
        }
      }
    },
    { passive: true }
  );
}
