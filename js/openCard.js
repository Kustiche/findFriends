export function openCard(e) {
  if (e.target.className === 'favorites__btn btn-reset') {
    const more = e.target;
    const card = more.closest('.favorites__card');
    const cardMiddle = card.querySelector('.favorites__card-middle');
    const cardMore = card.querySelector('.favorites__btn')

    card.classList.toggle('active');
    cardMiddle.classList.toggle('hidden');

    if (cardMore.textContent === 'More') {
      cardMore.textContent = 'Hide';
    }else {
      cardMore.textContent = 'More';
    }
  };
};