/**
 * @fileoverview Reproductor de música ambiental de fondo ("Eco, ecoaldea")
 * con inicio automático (autoplay) y desbloqueo instantáneo ante políticas de navegador,
 * además de botón flotante con ecualizador visual para pausar/reanudar.
 */

export function initBackgroundMusic() {
  const audio = document.getElementById('bg-music-audio');
  const toggleBtn = document.getElementById('bg-music-toggle');
  const statusLabel = document.getElementById('bg-music-label');

  if (!audio) return;

  audio.volume = 0.65;
  audio.loop = true;

  let userManuallyPaused = false;
  let unlockListenersActive = false;

  const updateUi = (isPlaying) => {
    if (!toggleBtn) return;
    toggleBtn.classList.toggle('is-playing', isPlaying);
    toggleBtn.setAttribute('aria-pressed', String(isPlaying));
    toggleBtn.setAttribute(
      'aria-label',
      isPlaying
        ? 'Pausar música de fondo: Eco, ecoaldea'
        : 'Reproducir música de fondo: Eco, ecoaldea'
    );
    if (statusLabel) {
      statusLabel.textContent = isPlaying ? 'Eco, ecoaldea · Sonando' : 'Eco, ecoaldea · Activar música';
    }
  };

  const unlockEvents = ['pointerdown', 'touchstart', 'click', 'keydown', 'scroll'];

  const removeUnlockListeners = () => {
    if (!unlockListenersActive) return;
    unlockListenersActive = false;
    unlockEvents.forEach((evt) => {
      window.removeEventListener(evt, tryAutoUnlock, { capture: true });
    });
  };

  function tryAutoUnlock(event) {
    if (userManuallyPaused) {
      removeUnlockListeners();
      return;
    }
    // Si el clic fue directamente en el botón de música, su propio handler lo gestiona
    if (event?.target && toggleBtn?.contains(event.target)) {
      removeUnlockListeners();
      return;
    }
    audio
      .play()
      .then(() => {
        updateUi(true);
        removeUnlockListeners();
      })
      .catch(() => {
        // Sigue esperando un gesto válido de desbloqueo de audio
      });
  }

  const startAutoplay = () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateUi(true);
          removeUnlockListeners();
        })
        .catch(() => {
          updateUi(false);
          if (!unlockListenersActive) {
            unlockListenersActive = true;
            unlockEvents.forEach((evt) => {
              window.addEventListener(evt, tryAutoUnlock, { capture: true, passive: true });
            });
          }
        });
    }
  };

  audio.addEventListener('play', () => updateUi(true));
  audio.addEventListener('pause', () => updateUi(false));

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      removeUnlockListeners();
      if (audio.paused) {
        userManuallyPaused = false;
        audio.play().catch(() => {});
      } else {
        userManuallyPaused = true;
        audio.pause();
      }
    });
  }

  startAutoplay();
}
