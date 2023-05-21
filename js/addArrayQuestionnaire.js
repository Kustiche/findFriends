import { name, age, photo } from "./view.js";
import { favoritesArray } from "./favoritesArray.js"
import { render } from "./render.js";
import { emailAPI, locationTextAPI, phoneAPI, registeredAgeAPI, streetAPI } from "./friendAPI.js";

export function addArrayQuestionnaire() {
  const questionnaireName = name.textContent;
  const questionnaireAge = age.textContent;

  const questionnaire = favoritesArray.find((item) => item.name === questionnaireName);

  if (questionnaire === undefined) {
    favoritesArray.push({
      name: questionnaireName,
      age: questionnaireAge,
      photo: photo.src,
      location: locationTextAPI,
      registered: registeredAgeAPI,
      street: streetAPI,
      phone: phoneAPI,
      email: emailAPI,
    });
  }else if (questionnaire.name === questionnaireName) {
    alert('В избранном уже существует такая анкета!');
    return;
  };

  render();
};