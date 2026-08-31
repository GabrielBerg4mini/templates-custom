document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initScrolledHeader();
  initFooterYear();
  initContactForm();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll e o header transparente->sólido no scroll
// (Bootstrap não tem nenhum dos dois), o ano do rodapé e o placeholder do
// formulário de contato (sem envio real — este é um site de demonstração).

function initScrolledHeader() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const note = form.querySelector('.contact-form__note');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Formulário de demonstração — sem envio real. Em produção, conectar
    // a um endpoint próprio ou serviço de e-mail.
    if (note) {
      note.textContent = 'Mensagem registrada. Em breve entraremos em contato.';
    }
    form.reset();
  });
}
