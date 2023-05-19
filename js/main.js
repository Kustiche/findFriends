import { heart, favoritesDelete, arrow } from "./view.js";
import { tabs } from "./tabs.js";
import { addArrayQuestionnaire } from "./addArrayQuestionnaire.js";
import { friendAPI } from "./friendAPI.js";

friendAPI();

arrow.addEventListener('click', () => {
  friendAPI();
});

tabs();

heart.forEach((item) => {
  item.addEventListener('click', () => {
    addArrayQuestionnaire(item);
  });
});

// favoritesDelete.forEach((favoriteDelete) => {
//   favoriteDelete.addEventListener('click', () => {

//   });
// });