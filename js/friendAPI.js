import { name, age, photo } from "./view.js";
const url = 'https://randomuser.me/api/?noinfo';

export function friendAPI() {

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((result) => {
      const resultAge = result.dob;
      const resultName = result.name;
      const resultPhoto = result.picture

      name.textContent = resultName.first + ' ' + resultName.title + ' ' + resultName.last;
      age.textContent = resultAge.age;
      photo.src = resultPhoto.large;
    })
};