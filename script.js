// script.js
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach((el, i) => {
  el.dataset.delay = i * 0.1; // Stagger animation
  observer.observe(el);
});
