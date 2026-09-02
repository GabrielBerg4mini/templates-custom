document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initStatCounters();
  initSwipers();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll (Bootstrap não tem) e o init do Swiper.

function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function initSwipers() {
  document.querySelectorAll('.swiper').forEach((el) => {
    // Quantos slides mostrar a partir do tablet (>=768px).
    // Ex.: <div class="swiper" data-slides-per-view="2">
    const perView = Number(el.dataset.slidesPerView) || 1;

    new Swiper(el, {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 1,
      breakpoints: {
        768: { slidesPerView: perView },
      },
      autoplay: { delay: 6000, disableOnInteraction: false },
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
    });
  });
}

// Contador animado para estatísticas (data-count-up): anima de 0 até o
// valor final quando o elemento entra na viewport, preservando prefixo/
// sufixo do texto original (+, %, k+, "anos" etc.) e formatação (milhar
// com ponto, decimais). Some quietamente com prefers-reduced-motion.
function initStatCounters() {
  const els = document.querySelectorAll('[data-count-up]');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const animate = (el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/[\d.,]*\d/);
    if (!match) return;

    const numStr = match[0];
    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice(match.index + numStr.length);
    const parts = numStr.split(/[.,]/);

    let target;
    let decimals = 0;
    let useThousands = false;

    if (parts.length === 1) {
      target = parseInt(parts[0], 10);
    } else {
      const lastPart = parts[parts.length - 1];
      if (lastPart.length === 3) {
        target = parseInt(parts.join(''), 10);
        useThousands = true;
      } else {
        target = parseFloat(numStr.replace(',', '.'));
        decimals = lastPart.length;
      }
    }

    if (!isFinite(target)) return;

    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      let display;

      if (decimals > 0) {
        display = current.toFixed(decimals);
      } else if (useThousands) {
        display = Math.round(current).toLocaleString('pt-BR');
      } else {
        display = String(Math.round(current));
      }

      el.textContent = prefix + display + suffix;

      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = raw;
      }
    };

    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  els.forEach((el) => observer.observe(el));
}
