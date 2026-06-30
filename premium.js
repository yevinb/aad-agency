(function () {
  'use strict';

  let lenis = null;

  function initLenis() {
    if (typeof Lenis === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    lenis = new Lenis({
      duration: 1.15,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', function () {
      document.dispatchEvent(new CustomEvent('lenis-scroll'));
    });
  }

  window.lenisScrollTo = function (el, offset) {
    if (!el) return;
    offset = offset || 80;
    var top = el.getBoundingClientRect().top + window.scrollY - offset;
    if (lenis) {
      lenis.scrollTo(top, { duration: 1.3 });
    } else {
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  function initHeroParallax() {
    var scene = document.querySelector('.premium-visual');
    var rings = document.querySelectorAll('.premium-ring');
    if (!scene || window.matchMedia('(pointer: coarse)').matches) return;

    var rx = 0, ry = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', function (e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 24;
      ty = (e.clientY / window.innerHeight - 0.5) * 16;
    });

    function tick() {
      rx += (tx - rx) * 0.06;
      ry += (ty - ry) * 0.06;
      scene.style.transform = 'translate(' + (rx * 0.3) + 'px, ' + (ry * 0.3) + 'px)';
      rings.forEach(function (ring, i) {
        var f = (i + 1) * 0.4;
        ring.style.transform = 'translate(calc(-50% + ' + (rx * f) + 'px), calc(-50% + ' + (ry * f) + 'px)) rotate(' + (Date.now() * 0.01 * (i % 2 ? -1 : 1)) + 'deg)';
      });
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initGlassStats() {
    var nums = document.querySelectorAll('.glass-stat-num[data-count]');
    if (!nums.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var start = performance.now();
        var duration = 1600;

        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (el) { obs.observe(el); });
  }

  function initPremiumReveals() {
    var els = document.querySelectorAll('.premium-reveal:not(.visible)');
    if (!els.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = parseInt(entry.target.dataset.premiumDelay || '0', 10);
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  function boot() {
    initLenis();
    initHeroParallax();
    initGlassStats();
    initPremiumReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
