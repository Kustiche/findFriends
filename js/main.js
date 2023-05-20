import { heart, arrow, favorites } from "./view.js";
import { tabs } from "./tabs.js";
import { addArrayQuestionnaire } from "./addArrayQuestionnaire.js";
import { friendAPI } from "./friendAPI.js";
import { favoriteDelete } from "./favoriteDelete.js";

friendAPI();

arrow.addEventListener('click', () => {
  friendAPI();
});

tabs();

heart.addEventListener('click', () => {
  addArrayQuestionnaire();
});

favorites.addEventListener('click', (e) => {
  favoriteDelete(e);
})