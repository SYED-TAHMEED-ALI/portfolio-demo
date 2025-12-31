// Simple animation delay for cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});
