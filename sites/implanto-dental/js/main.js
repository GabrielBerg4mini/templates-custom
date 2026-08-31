document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
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
