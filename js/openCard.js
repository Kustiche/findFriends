export function openCard(e) {
  if (e.target.className === 'favorites__btn btn-reset' || e.target.className === 'favorites__picture') {
    const more = e.target;
    const card = more.closest('.favorites__card');
    const cardMiddle = card.querySelector('.favorites__card-middle');

    if (card.className === 'favorites__card active') {
      card.classList.add('active');
      cardMiddle.classList.remove('hidden');
      console.log(42);
    }else {
      card.classList.remove('active');
      cardMiddle.classList.add('hidden');
      console.log(card.className);
    }
  };
};