document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initHeroSignature();
  initContactForm();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll, a interação de assinatura da hero
// (linhas da headline + contador do índice) e o envio simulado do
// formulário de contato — sem back-end nesta fase de template.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
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

// Assinatura de motion da hero: ao carregar, a headline sobe para dentro
// do quadro (ver .reveal-line em scss/_hero.scss) e o número de índice
// conta rapidamente até o valor real, como um contador mecânico.
function initHeroSignature() {
  if (prefersReducedMotion) {
    document.body.classList.add('is-loaded');
    document.querySelectorAll('[data-counter]').forEach((el) => {
      el.textContent = String(el.dataset.target).padStart(2, '0');
    });
    return;
  }

  requestAnimationFrame(() => {
    document.body.classList.add('is-loaded');
  });

  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.target) || 0;
    runCounterFlicker(el, target);
  });
}

function runCounterFlicker(el, target) {
  const steps = 10;
  let step = 0;

  const timer = setInterval(() => {
    step += 1;

    if (step >= steps) {
      clearInterval(timer);
      el.textContent = String(target).padStart(2, '0');
      return;
    }

    // Alterna dígitos aleatórios antes de assentar no valor final —
    // reforça a leitura de "número mecânico", não decorativo.
    const flicker = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    el.textContent = String(flicker % 100).padStart(2, '0');
  }, 45);
}

// Sem back-end nesta fase: confirma visualmente o envio e evita reload
// da página, mantendo o formulário utilizável como demonstração.
function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const success = form.querySelector('[data-contact-success]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (success) {
      success.classList.add('is-visible');
    }

    form.reset();
  });
}
