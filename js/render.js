import { addQuestionnaire } from "./addQuestionnaire.js";
import { favorites } from "./view.js";
import { favoritesArray } from "./favoritesArray.js";

export function render(name, age) {
  favorites.textContent = '';

  favoritesArray.forEach((favorite) => {
    addQuestionnaire(favorite.name);
  })
}