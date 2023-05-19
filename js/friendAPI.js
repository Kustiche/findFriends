import { name, age, photo } from "./view.js";

export function friendAPI() {
  const url = 'https://randomuser.me/api/?noinfo';

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((resultPhoto) => resultPhoto.picture)
    .then((questionnairePhoto) => photo.src = questionnairePhoto.large)

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((resultDob) => resultDob.dob)
    .then((questionnaireAge) => age.textContent = questionnaireAge.age + ' y. o.')

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((resultName) => resultName.name)
    .then((questionnaireName) => name.textContent = questionnaireName.first + ' ' + questionnaireName.title + ' ' + questionnaireName.last)
};