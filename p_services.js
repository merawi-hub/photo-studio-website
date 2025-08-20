// Add reveal animation when scrolling
const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < trigger) {
      card.classList.add('visible');
    }
  });
});
