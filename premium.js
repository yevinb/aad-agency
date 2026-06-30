(function () {
  'use strict';

  var lenis = null;

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

  function initLangToggle() {
    var saved = localStorage.getItem('aad-lang');
    if (saved === 'ar' || saved === 'en') setLang(saved);

    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.dataset.lang);
      });
    });
  }

  function setLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('aad-lang', lang);
    var toggle = document.getElementById('langToggle');
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initHeroParallax() {
    var stage = document.querySelector('.cine-stage');
    var mark = document.querySelector('.cine-mark');
    if (!stage || !mark || window.matchMedia('(pointer: coarse)').matches) return;

    var rx = 0, ry = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', function (e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 20;
      ty = (e.clientY / window.innerHeight - 0.5) * 14;
    });

    function tick() {
      rx += (tx - rx) * 0.06;
      ry += (ty - ry) * 0.06;
      mark.style.transform = 'rotateX(' + (14 - ry * 0.3) + 'deg) scaleY(1.05) translate(' + (rx * 0.4) + 'px, ' + (ry * 0.4 - 8) + 'px)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initStatCounters() {
    var nums = document.querySelectorAll('.cine-stat-num[data-count], .glass-stat-num[data-count]');
    if (!nums.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.dataset.counted) return;
        el.dataset.counted = '1';
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var start = performance.now();
        var duration = 1400;

        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.2 });

    nums.forEach(function (el) { obs.observe(el); });
  }

  function boot() {
    initLenis();
    initLangToggle();
    initHeroParallax();
    initStatCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
