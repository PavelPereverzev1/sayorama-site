document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.role-card');
  const moreButton = document.querySelector('.more-btn');

  function hideExtraCards() {
    if (window.innerWidth <= 768) {
      cards.forEach((card, index) => {
        if (index >= 6) {
          card.classList.add('visually-hidden');
          card.classList.remove('revealed');
        } else card.classList.remove('visually-hidden');
      });
      moreButton.style.display = 'flex';
    } else {
      cards.forEach(card => card.classList.remove('visually-hidden'));
      moreButton.style.display = 'none';
    }
  }

  hideExtraCards();

  window.addEventListener('resize', hideExtraCards);

  moreButton.addEventListener('click', () => {
    cards.forEach((card, index) => {
      if (card.classList.contains('visually-hidden')) {
        card.classList.remove('visually-hidden');
        card.classList.add('revealed');
      }
    });

    moreButton.style.display = 'none';
  });
});
