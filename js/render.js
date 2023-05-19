import { addQuestionnaire } from "./addQuestionnaire.js";
import { favorites } from "./view.js";
import { favoritesArray } from "./favoritesArray.js";

export function render() {
  favorites.textContent = '';

  favoritesArray.forEach((favorite) => {
    addQuestionnaire(favorite.name);
  })
}