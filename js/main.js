import { heart, favoritesDelete, arrow, name } from "./view.js";
import { tabs } from "./tabs.js";
import { addArrayQuestionnaire } from "./addArrayQuestionnaire.js";
import { friendAPI } from "./friendAPI.js";

friendAPI();

arrow.addEventListener('click', () => {
  friendAPI();
});

tabs();

heart.addEventListener('click', () => {
  addArrayQuestionnaire();
});

// favoritesDelete.forEach((favoriteDelete) => {
//   favoriteDelete.addEventListener('click', () => {

//   });
// });