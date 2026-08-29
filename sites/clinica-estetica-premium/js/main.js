document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initSwipers();
});

// Bootstrap (navbar, collapse) já cuida de si mesmo via data-bs-*.
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
