document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initStatCounters();
  initHeaderScroll();
  initMobileNavClose();
  initFaqAccordion();
  initWhatsAppFloat();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam comportamentos que o Bootstrap não resolve sozinho.

// Reveal-on-scroll + a linha de precisão que "desenha" (mesmo observer,
// a diferença de comportamento vem só do CSS de cada atributo).
function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal], [data-line-draw]');
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

// Navbar ganha sombra/linha inferior só depois de rolar — no topo ela
// fica lisa, sobre o hero.
function initHeaderScroll() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Fecha o menu mobile (collapse do Bootstrap) ao clicar em um link —
// o Bootstrap não faz isso sozinho.
function initMobileNavClose() {
  const collapseEl = document.getElementById('mainNav');
  if (!collapseEl || !window.bootstrap) return;

  const links = collapseEl.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const instance = window.bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
      instance.hide();
    });
  });
}

// FAQ — acordeão vanilla: um item por vez, sem dependência de plugin.
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-item__trigger');
    const panel = item.querySelector('.faq-item__panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-item__trigger')?.setAttribute('aria-expanded', 'false');
        const otherPanel = other.querySelector('.faq-item__panel');
        if (otherPanel) otherPanel.hidden = true;
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });
}

// Botão flutuante do WhatsApp: aparece depois de um pequeno scroll, para
// não competir com o CTA principal do hero.
function initWhatsAppFloat() {
  const fab = document.getElementById('whatsappFloat');
  if (!fab) return;

  const onScroll = () => {
    fab.classList.toggle('is-visible', window.scrollY > 400);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
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
