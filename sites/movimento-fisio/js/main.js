document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initFaqAccordion();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll e o acordeão de FAQ (Bootstrap não tem
// nenhum dos dois prontos do jeito que a direção de arte pede).

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

function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-item__trigger');
    const wrap = item.querySelector('.faq-item__answer-wrap');
    if (!trigger || !wrap) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Acordeão: só uma pergunta aberta por vez.
      items.forEach((other) => {
        if (other === item) return;
        other.classList.remove('is-open');
        other.querySelector('.faq-item__trigger')?.setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-item__answer-wrap')?.setAttribute('aria-hidden', 'true');
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      wrap.setAttribute('aria-hidden', String(isOpen));
    });
  });
}
