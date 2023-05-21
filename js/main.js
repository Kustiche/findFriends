import { heart, arrow, favorites } from "./view.js";
import { tabs } from "./tabs.js";
import { addArrayQuestionnaire } from "./addArrayQuestionnaire.js";
import { friendAPI } from "./friendAPI.js";
import { favoriteDelete } from "./favoriteDelete.js";
import { favoritesArray, saveLocal } from "./favoritesArray.js";
import { render } from "./render.js";
import { openCard } from "./openCard.js";

saveLocal();
render();

friendAPI();

arrow.addEventListener('click', () => {
  friendAPI();
});

tabs();

heart.addEventListener('click', () => {
  addArrayQuestionnaire();

  localStorage.setItem('questionnairesArray', JSON.stringify(favoritesArray));
});

favorites.addEventListener('click', (e) => {
  favoriteDelete(e);
  openCard(e);

  localStorage.setItem('questionnairesArray', JSON.stringify(favoritesArray));
})