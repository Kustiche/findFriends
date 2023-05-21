import { name, age, photo } from "./view.js";
export let locationTextAPI = '';
export let registeredAgeAPI = '';
const url = 'https://randomuser.me/api/?noinfo';

export function friendAPI() {

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((result) => {
      const resultName = result.name;
      const resultAge = result.dob;
      const resultPhoto = result.picture
      const resultLocation = result.location;
      const resultRegistered = result.registered;

      registeredAgeAPI = resultRegistered.age;
      locationTextAPI = resultLocation.country + ', ' + resultLocation.sity;
      name.textContent = resultName.first + ' ' + resultName.title + ' ' + resultName.last;
      age.textContent = resultAge.age;
      photo.src = resultPhoto.large;
    });
};