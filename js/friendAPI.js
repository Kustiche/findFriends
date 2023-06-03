import { name, age, photo } from "./view.js";
export let locationTextAPI = '';
export let registeredAgeAPI = '';
export let streetAPI = '';
export let phoneAPI = '';
export let emailAPI = '';
const url = 'https://randomuser.me/api/?noinfo';

export function friendAPI() {

  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((result) => {
      console.log(result);
      const resultName = result.name;
      const resultDob = result.dob;
      const resultPhoto = result.picture;
      const resultLocation = result.location;
      const resultRegistered = result.registered;
      const resultStreet = resultLocation.street;
      const resultPhone = result.phone;
      const resultEmail = result.email;

      streetAPI = resultStreet.name;
      phoneAPI = resultPhone;
      emailAPI = resultEmail;
      registeredAgeAPI = resultRegistered.age;
      locationTextAPI = resultLocation.country + ', ' + resultLocation.sity;
      name.textContent = resultName.first + ' ' + resultName.title + ' ' + resultName.last;
      age.textContent = resultDob.age;
      photo.src = resultPhoto.large;
    });
};