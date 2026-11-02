/**
 * @fileoverview Controlador de navegación principal:
 * - Navbar transparente que cambia de apariencia al hacer scroll
 * - Menú hamburguesa accesible para dispositivos móviles
 * - Indicador activo de sección (ScrollSpy) y barra de progreso de lectura
 */

export function initNavigation() {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const scrollProgress = document.getElementById('scroll-progress-bar');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  if (!header) return;

  let isMenuOpen = false;

  const setMenuState = (open) => {
    isMenuOpen = Boolean(open);
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      menuToggle.setAttribute(
        'aria-label',
        isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
      );
    }
    if (mobileDrawer) {
      mobileDrawer.classList.toggle('is-open', isMenuOpen);
      mobileDrawer.setAttribute('aria-hidden', String(!isMenuOpen));
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.toggle('is-visible', isMenuOpen);
    }
    document.body.classList.toggle('nav-drawer-open', isMenuOpen);
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      setMenuState(!isMenuOpen);
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => setMenuState(false));
  }

  // Cerrar drawer móvil al seleccionar un enlace y aplicar scroll suave
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          setMenuState(false);
          const headerOffset = header.offsetHeight || 76;
          const elementTop = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementTop - headerOffset + 4),
            behavior: 'smooth'
          });
          history.replaceState(null, '', href);
        }
      } else {
        setMenuState(false);
      }
    });
  });

  // Cerrar menú con tecla Escape
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setMenuState(false);
      menuToggle?.focus();
    }
  });

  // Actualización de estado del navbar y barra de progreso en scroll con rAF
  let ticking = false;
  const updateScrollState = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', scrollY > 36);

    if (scrollProgress) {
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, (scrollY / docHeight) * 100) : 0;
      scrollProgress.style.width = `${progress.toFixed(2)}%`;
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateScrollState();

  // ScrollSpy para resaltar la sección activa en el menú
  const sections = Array.from(document.querySelectorAll('section[id]'));
  if ('IntersectionObserver' in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              const isMatch = link.getAttribute('href') === activeId;
              link.classList.toggle('is-active', isMatch);
              if (isMatch) {
                link.setAttribute('aria-current', 'true');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: 0.05
      }
    );

    sections.forEach((section) => spyObserver.observe(section));
  }
}
