document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initContactForm();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll (Bootstrap não tem) e o envio simulado
// do formulário de contato — sem back-end nesta fase de template.

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

// Sem back-end: o formulário monta a mensagem e abre o WhatsApp do engenheiro.
function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const success = form.querySelector('[data-contact-success]');
  const phone = form.dataset.whatsapp;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const lines = [
      'Olá, Eliézer! Vim pelo site.',
      `Nome: ${data.get('nome')}`,
      data.get('condominio') ? `Condomínio/empresa: ${data.get('condominio')}` : '',
      data.get('servico') ? `Serviço: ${data.get('servico')}` : '',
      `Demanda: ${data.get('mensagem')}`,
    ].filter(Boolean);

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');

    if (success) success.classList.add('is-visible');
    form.reset();
  });
}
