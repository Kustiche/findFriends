import { favoritesArray } from "./favoritesArray.js";
import { render } from "./render.js";

export function favoriteDelete(e) {
  if (e.target.className === 'favorites__delete' || e.target.className === 'favorites__btn-delete btn-reset') {
    const imgDelete = e.target;
    const card = imgDelete.closest('.favorites__card');
    const name = card.querySelector('.favorites__name');
    const cardIndex = favoritesArray.findIndex((card) => card.name === name.textContent);

    favoritesArray.splice(cardIndex, 1);

    render();
  }
};