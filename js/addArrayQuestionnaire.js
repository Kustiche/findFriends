import { favoritesArray } from "./favoritesArray.js"
import { render } from "./render.js";

export function addArrayQuestionnaire(item) {
  const card = item.closest('.friends-card');
  const itemName = card.querySelector('.friends-card__text--name');
  const itemAge = card.querySelector('.friends-card__text--age');

  const name = itemName.textContent;
  const age = itemAge.textContent;

  const questionnaire = favoritesArray.find((item) => item.name === name);

  if (questionnaire === undefined) {
    favoritesArray.push({
      name,
      age
    });
  }else if (questionnaire.name === name) {
    alert('В избранном уже существует такая анкета!');
    return;
  };

  render(name);
};