/**
 * @fileoverview Módulos interactivos de contenido:
 * 1. Filtrado de galerías de Actividades
 * 2. Selector interactivo del Ciclo de Conservación de Semillas
 * 3. Zona de Niños: Mini-Reto interactivo "Guardián de la Tierra" con insignia desbloqueable
 * 4. Blog y Bitácora de Saberes: Filtro de categorías y Lector Modal de artículos completos
 * 5. Acordeón accesible de Preguntas Frecuentes (FAQ)
 */

import { SITE_CONTENT } from '../data/siteContent.js';

export function initGalleryAndInteractiveModules() {
  // 1. Filtros de categoría en la sección "Nuestras Actividades"
  const filterButtons = Array.from(document.querySelectorAll('[data-activity-filter]'));
  const activityCards = Array.from(document.querySelectorAll('[data-activity-card]'));

  if (filterButtons.length > 0 && activityCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-activity-filter') || 'all';

        filterButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });

        activityCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category') || '';
          const shouldShow =
            selectedCategory === 'all' || cardCategory === selectedCategory;

          if (shouldShow) {
            card.classList.remove('is-hidden');
            window.requestAnimationFrame(() => {
              card.classList.remove('is-filtering-out');
            });
          } else {
            card.classList.add('is-filtering-out');
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // 2. Selector interactivo del Ciclo de Conservación de Semillas en Filosofía
  const seedTabs = Array.from(document.querySelectorAll('[data-seed-step-btn]'));
  const seedPanels = Array.from(document.querySelectorAll('[data-seed-step-panel]'));

  if (seedTabs.length > 0 && seedPanels.length > 0) {
    seedTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetStep = tab.getAttribute('data-seed-step-btn');

        seedTabs.forEach((t) => {
          const isCurrent = t === tab;
          t.classList.toggle('is-active', isCurrent);
          t.setAttribute('aria-selected', String(isCurrent));
        });

        seedPanels.forEach((panel) => {
          const isMatch = panel.getAttribute('data-seed-step-panel') === targetStep;
          panel.classList.toggle('is-active', isMatch);
          panel.hidden = !isMatch;
        });
      });
    });
  }

  // 3. Zona de Niños: Mini-Reto Interactivo "Guardián de la Tierra"
  const quizQuestions = Array.from(document.querySelectorAll('[data-quiz-question]'));
  const scoreDisplay = document.getElementById('kids-quiz-score');
  const guardianBadge = document.getElementById('kids-guardian-badge');
  const resetQuizBtn = document.getElementById('kids-quiz-reset');
  const answeredCorrectly = new Set();

  const updateQuizStatus = () => {
    const total = quizQuestions.length || 3;
    const count = answeredCorrectly.size;
    if (scoreDisplay) {
      scoreDisplay.textContent = `${count} / ${total} semillas germinadas`;
    }
    if (guardianBadge) {
      guardianBadge.hidden = count < total;
      guardianBadge.classList.toggle('is-unlocked', count >= total);
    }
  };

  quizQuestions.forEach((qBlock) => {
    const qId = qBlock.getAttribute('data-quiz-question');
    const options = Array.from(qBlock.querySelectorAll('[data-quiz-option]'));
    const feedbackEl = qBlock.querySelector('[data-quiz-feedback]');

    options.forEach((optBtn) => {
      optBtn.addEventListener('click', () => {
        const isCorrect = optBtn.getAttribute('data-correct') === 'true';

        options.forEach((b) => {
          b.classList.remove('is-selected-correct', 'is-selected-wrong');
        });

        if (isCorrect) {
          optBtn.classList.add('is-selected-correct');
          answeredCorrectly.add(qId);
          if (feedbackEl) {
            feedbackEl.textContent =
              optBtn.getAttribute('data-explanation') ||
              '¡Excelente respuesta, Guardián de la Tierra!';
            feedbackEl.className = 'quiz-feedback is-correct';
            feedbackEl.hidden = false;
          }
        } else {
          optBtn.classList.add('is-selected-wrong');
          if (feedbackEl) {
            feedbackEl.textContent =
              '¡Casi! Intenta con otra respuesta pensando en lo que cuida a la naturaleza.';
            feedbackEl.className = 'quiz-feedback is-retry';
            feedbackEl.hidden = false;
          }
        }
        updateQuizStatus();
      });
    });
  });

  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      answeredCorrectly.clear();
      quizQuestions.forEach((qBlock) => {
        qBlock
          .querySelectorAll('[data-quiz-option]')
          .forEach((b) =>
            b.classList.remove('is-selected-correct', 'is-selected-wrong')
          );
        const fb = qBlock.querySelector('[data-quiz-feedback]');
        if (fb) fb.hidden = true;
      });
      updateQuizStatus();
    });
  }

  // 4. Blog y Bitácora de Saberes: Filtro de Categorías + Modal Lector de Artículos
  const blogFilterBtns = Array.from(document.querySelectorAll('[data-blog-filter]'));
  const blogCards = Array.from(document.querySelectorAll('[data-blog-card]'));

  if (blogFilterBtns.length > 0 && blogCards.length > 0) {
    blogFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-blog-filter') || 'all';
        blogFilterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });

        blogCards.forEach((card) => {
          const cardCat = card.getAttribute('data-blog-category') || '';
          const visible = cat === 'all' || cardCat === cat;
          card.classList.toggle('is-hidden', !visible);
        });
      });
    });
  }

  const blogModal = document.getElementById('blog-reader-modal');
  const blogModalClose = document.getElementById('blog-reader-close');
  const blogModalBackdrop = document.getElementById('blog-reader-backdrop');
  const blogModalImg = document.getElementById('blog-reader-image');
  const blogModalCat = document.getElementById('blog-reader-category');
  const blogModalTime = document.getElementById('blog-reader-time');
  const blogModalTitle = document.getElementById('blog-reader-title');
  const blogModalBody = document.getElementById('blog-reader-body');
  let lastBlogTrigger = null;

  const openBlogArticle = (articleId, triggerEl) => {
    const articles = SITE_CONTENT.blog?.articles || [];
    const article = articles.find((a) => a.id === articleId);
    if (!article || !blogModal) return;

    lastBlogTrigger = triggerEl || document.activeElement;
    if (blogModalImg) {
      blogModalImg.src = article.image;
      blogModalImg.alt = article.imageAlt || article.title;
    }
    if (blogModalCat) blogModalCat.textContent = article.categoryLabel;
    if (blogModalTime) blogModalTime.textContent = article.readTime;
    if (blogModalTitle) blogModalTitle.textContent = article.title;
    if (blogModalBody) {
      blogModalBody.innerHTML = article.content
        .map((p) => `<p>${p}</p>`)
        .join('');
    }

    blogModal.classList.add('is-open');
    blogModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    blogModalClose?.focus();
  };

  const closeBlogArticle = () => {
    if (!blogModal) return;
    blogModal.classList.remove('is-open');
    blogModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastBlogTrigger && typeof lastBlogTrigger.focus === 'function') {
      lastBlogTrigger.focus();
    }
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-blog-open]');
    if (trigger) {
      event.preventDefault();
      const articleId = trigger.getAttribute('data-blog-open');
      openBlogArticle(articleId, trigger);
    }
  });

  blogModalClose?.addEventListener('click', closeBlogArticle);
  blogModalBackdrop?.addEventListener('click', closeBlogArticle);
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && blogModal?.classList.contains('is-open')) {
      closeBlogArticle();
    }
  });

  // 5. Acordeón interactivo de Preguntas Frecuentes (FAQ)
  const faqToggles = Array.from(document.querySelectorAll('[data-faq-toggle]'));
  faqToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId = btn.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      btn.setAttribute('aria-expanded', String(!expanded));
      btn.closest('.faq-item')?.classList.toggle('is-open', !expanded);
      if (panel) {
        panel.hidden = expanded;
      }
    });
  });

  // 6. Zona de Cursos y Talleres Comunitarios: Filtro de Categorías + Temarios Desplegables
  const courseFilterBtns = Array.from(document.querySelectorAll('[data-course-filter]'));
  const courseCards = Array.from(document.querySelectorAll('[data-course-card]'));

  if (courseFilterBtns.length > 0 && courseCards.length > 0) {
    courseFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-course-filter') || 'all';
        courseFilterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });

        courseCards.forEach((card) => {
          const cardCat = card.getAttribute('data-course-category') || '';
          const visible = cat === 'all' || cardCat === cat;
          card.classList.toggle('is-hidden', !visible);
        });
      });
    });
  }

  const syllabusToggles = Array.from(document.querySelectorAll('[data-course-syllabus-toggle]'));
  syllabusToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const listId = btn.getAttribute('aria-controls');
      const listEl = listId ? document.getElementById(listId) : null;

      btn.setAttribute('aria-expanded', String(!expanded));
      btn.classList.toggle('is-open', !expanded);
      if (listEl) {
        listEl.hidden = expanded;
      }
    });
  });
}
