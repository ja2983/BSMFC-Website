// Sponsor Carousel Controls
const carousel = document.getElementById('sponsor-carousel');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

// Manual scrolling
leftBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -200, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 200, behavior: 'smooth' });
});

// Autoplay scroll
let autoScroll = setInterval(() => {
  carousel.scrollBy({ left: 1, behavior: 'smooth' });
}, 100);

// Optional: pause scroll on hover
carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
carousel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    carousel.scrollBy({ left: 1, behavior: 'smooth' });
  }, 100);
});

// ─── Sponsors.js Functionality ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const track   = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const items   = Array.from(track.children);
  const itemWidth = items[0].getBoundingClientRect().width + 20; // include margin

  let currentIndex = 0;

  // Arrange items side-by-side
  items.forEach((item, index) => {
    item.style.left = (itemWidth * index) + 'px';
  });

  // Core slider movement
  const moveTo = (index) => {
    track.style.transform = `translateX(-${itemWidth * index}px)`;
    currentIndex = index;
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) moveTo(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) moveTo(currentIndex + 1);
  });
});