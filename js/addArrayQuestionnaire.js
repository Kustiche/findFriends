import { name, age } from "./view.js";
import { favoritesArray } from "./favoritesArray.js"
import { render } from "./render.js";

export function addArrayQuestionnaire() {
  const questionnaireName = name.textContent;
  const questionnaireAge = age.textContent;

  const questionnaire = favoritesArray.find((item) => item.name === questionnaireName);

  if (questionnaire === undefined) {
    favoritesArray.push({
      name: questionnaireName,
      age: questionnaireAge
    });
  }else if (questionnaire.name === questionnaireName) {
    alert('В избранном уже существует такая анкета!');
    return;
  };

  render();
};