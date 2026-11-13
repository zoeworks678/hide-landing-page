// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero finish carousel
const finishes = [
  {
    src: 'assets/images/duffel-cognac.webp',
    alt: 'Weekender duffel bag in smooth cognac full-grain leather',
    label: 'Full Grain Leather',
  },
  {
    src: 'assets/images/hobo-suede-camel.webp',
    alt: 'Shoulder bag in brushed camel suede',
    label: 'Suede Leather',
  },
  {
    src: 'assets/images/loafer-patent-rouge.webp',
    alt: 'Loafer in high-gloss rouge patent leather with brass hardware',
    label: 'Patent Leather',
  },
];

let finishIndex = 0;
const heroImage = document.getElementById('hero-image');
const heroCaptionLabel = document.getElementById('hero-caption-label');
const heroPrev = document.getElementById('hero-prev');
const heroNext = document.getElementById('hero-next');

function renderFinish() {
  const finish = finishes[finishIndex];
  if (!heroImage || !heroCaptionLabel) return;

  heroImage.style.opacity = '0';
  window.setTimeout(() => {
    heroImage.src = finish.src;
    heroImage.alt = finish.alt;
    heroCaptionLabel.textContent = finish.label;
    heroImage.style.opacity = '1';
  }, 150);
}

if (heroImage) {
  heroImage.style.transition = 'opacity 0.15s ease';
}

heroPrev?.addEventListener('click', () => {
  finishIndex = (finishIndex - 1 + finishes.length) % finishes.length;
  renderFinish();
});

heroNext?.addEventListener('click', () => {
  finishIndex = (finishIndex + 1) % finishes.length;
  renderFinish();
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
