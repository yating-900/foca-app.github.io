(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var lastY = window.scrollY, ticking = false;
  function update() {
    var y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 8);
    if (y > 400 && y > lastY + 4) nav.classList.add('is-hidden');
    else if (y < lastY - 4 || y <= 400) nav.classList.remove('is-hidden');
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  nav.addEventListener('focusin', function () { nav.classList.remove('is-hidden'); });
  update();
  var dl = document.querySelector('[data-downloads]');
  if (dl && nav.querySelector('.nav-get') && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      nav.classList.toggle('show-get', !e[0].isIntersecting && e[0].boundingClientRect.top < 0);
    }).observe(dl);
  }
})();
