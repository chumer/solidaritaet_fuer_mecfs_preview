// Menü-Knopf für schmale Bildschirme
(function () {
  var header = document.querySelector('.site-header');
  var toggle = header && header.querySelector('.menu-toggle');
  if (!toggle) return;

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('is-open'));
  });

  // Nach Klick auf einen Menüpunkt wieder schließen
  header.querySelectorAll('.site-nav a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  // Mit Escape schließen
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
