/**
 * @fileoverview Motor de Animaciones y Parallax Multicapa de Alto Impacto
 * - IntersectionObserver para revelación progresiva de secciones y tarjetas
 * - Parallax multicapa en scroll (fondo, plano medio, primer plano y contra-parallax)
 * - Parallax interactivo con cursor en el Hero para pantallas de escritorio
 */

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay');
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // Motor Parallax Multicapa en Scroll
  const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
  if (parallaxItems.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight;
    mouseX += (targetMouseX - mouseX) * 0.12;
    mouseY += (targetMouseY - mouseY) * 0.12;

    parallaxItems.forEach((el) => {
      const container = el.closest('[data-parallax-scene]') || el.parentElement;
      const rect = (container || el).getBoundingClientRect();

      if (rect.bottom < -250 || rect.top > viewportHeight + 250) return;

      const speed = parseFloat(el.getAttribute('data-parallax') || '0.32');
      const scale = parseFloat(el.getAttribute('data-parallax-scale') || '1.22');
      const mouseFactor = parseFloat(el.getAttribute('data-parallax-mouse') || '0');

      // Distancia desde el centro de la pantalla (-1 a +1)
      const sceneCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const deltaY = sceneCenter - viewportCenter;

      // Desplazamiento vertical pronunciado y fluido (hasta ±150px)
      const translateY = Math.max(-150, Math.min(150, -deltaY * speed)) + mouseY * mouseFactor;
      const translateX = mouseX * mouseFactor;

      el.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scale})`;
    });
  };

  let ticking = false;
  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });

  // Parallax interactivo adicional al mover el mouse en escritorio
  const heroSection = document.getElementById('inicio');
  if (heroSection && window.matchMedia('(min-width: 1024px)').matches) {
    heroSection.addEventListener(
      'mousemove',
      (event) => {
        const { innerWidth, innerHeight } = window;
        targetMouseX = (event.clientX / innerWidth - 0.5) * 28;
        targetMouseY = (event.clientY / innerHeight - 0.5) * 28;
        requestUpdate();
      },
      { passive: true }
    );
  }

  updateParallax();
}
