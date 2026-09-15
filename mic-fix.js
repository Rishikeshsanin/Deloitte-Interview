// Stabilize the microphone UI during Ultra Mode.
// Web Speech Recognition can end/restart internally during a long session.
// Ultra should remain visually active while those reconnects happen.
(function () {
  if (typeof listening !== 'function') return;

  const originalListening = listening;
  const originalBuild = typeof build === 'function' ? build : null;

  if (originalBuild) {
    build = function () {
      const recognition = originalBuild();
      if (recognition && typeof U !== 'undefined' && U.active) {
        try { recognition.continuous = true; } catch (_) {}
      }
      return recognition;
    };
  }

  listening = function (value) {
    on = value ? 1 : 0;

    if (typeof U !== 'undefined' && U.active) {
      E.rec.classList.add('on');
      E.rec.textContent = '● Ultra Listening';
      E.rec.disabled = true;
      E.rec.setAttribute('aria-disabled', 'true');
      E.rec.style.opacity = '1';
      E.rec.style.cursor = 'default';
      E.ls.textContent = '● Listening continuously…';
      E.status.textContent = 'Ultra active';
      return;
    }

    E.rec.disabled = false;
    E.rec.removeAttribute('aria-disabled');
    E.rec.style.opacity = '';
    E.rec.style.cursor = '';
    originalListening(value);
  };

  // Set Chrome/Edge speech recognition to continuous before Ultra starts.
  E.startU?.addEventListener('click', function () {
    if (R) {
      try { R.continuous = true; } catch (_) {}
    }
    requestAnimationFrame(function () {
      if (U.active) listening(on);
    });
  }, true);

  // Restore normal one-question behavior after the Ultra session ends.
  E.end?.addEventListener('click', function () {
    if (R) {
      try { R.continuous = false; } catch (_) {}
    }
    requestAnimationFrame(function () {
      E.rec.disabled = false;
      E.rec.removeAttribute('aria-disabled');
      E.rec.style.opacity = '';
      E.rec.style.cursor = '';
    });
  });
})();
