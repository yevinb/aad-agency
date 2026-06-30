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
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initGlassStats() {
    var nums = document.querySelectorAll('.fp-stat-num[data-count], .glass-stat-num[data-count]');
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

  function initHero3D() {
    var el = document.getElementById('fpMark');
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var shadows = [];
    for (var i = 1; i <= 42; i++) {
      var pct = Math.max(4, Math.round(50 - i * 1.05));
      shadows.push(i + 'px ' + i + 'px 0 hsl(120, 100%, ' + pct + '%)');
    }
    shadows.push('0 0 50px rgba(0,255,0,0.8)');
    shadows.push('0 0 100px rgba(0,255,0,0.35)');
    shadows.push('0 40px 60px rgba(0,0,0,0.9)');
    el.style.textShadow = shadows.join(',');
  }

  function initHeroParallax() {
    var stage = document.getElementById('fpStage');
    var hero = document.getElementById('slide-1');
    if (!stage || !hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = Math.max(-0.5, Math.min(0.5, x));
      targetY = Math.max(-0.5, Math.min(0.5, y));
    });

    hero.addEventListener('mouseleave', function () {
      targetX = 0;
      targetY = 0;
    });

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      hero.style.setProperty('--fp-px', currentX.toFixed(4));
      hero.style.setProperty('--fp-py', currentY.toFixed(4));
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initHeroParticles() {
    var canvas = document.getElementById('fpParticles');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var count = window.innerWidth < 768 ? 35 : 60;
    var w = 0;
    var h = 0;

    function resize() {
      var parent = canvas.parentElement;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    }

    function spawn() {
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.4,
          vy: -(Math.random() * 0.35 + 0.12),
          vx: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.5 + 0.15,
          green: Math.random() > 0.25,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.green
          ? 'rgba(0, 255, 0, ' + p.alpha + ')'
          : 'rgba(255, 255, 255, ' + (p.alpha * 0.5) + ')';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    resize();
    spawn();
    draw();
    window.addEventListener('resize', function () {
      resize();
      spawn();
    });
  }

  function initHeroReady() {
    function markReady() {
      document.body.classList.add('fp-ready');
    }

    var preloader = document.getElementById('preloader');
    if (!preloader) {
      markReady();
      return;
    }

    var obs = new MutationObserver(function () {
      if (preloader.classList.contains('done')) {
        markReady();
        obs.disconnect();
      }
    });
    obs.observe(preloader, { attributes: true, attributeFilter: ['class'] });

    setTimeout(markReady, 3600);
  }

  function boot() {
    initLenis();
    initLangToggle();
    initGlassStats();
    initHero3D();
    initHeroParallax();
    initHeroParticles();
    initHeroReady();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
