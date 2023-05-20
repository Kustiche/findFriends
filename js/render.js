import { favorites } from "./view.js";
import { addQuestionnaire } from "./addQuestionnaire.js";
import { favoritesArray } from "./favoritesArray.js";

export function render() {
  favorites.textContent = '';

  favoritesArray.forEach((favorite) => {
    addQuestionnaire(favorite.name);
  })
}