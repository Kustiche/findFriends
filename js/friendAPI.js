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
      const {name: questionnaireName, dob, picture, location, registered, resultLocation: street, phone, email} = result;
      const resultName = questionnaireName;
      const resultDob = dob;
      const resultPhoto = picture;
      const resultLocation = location;
      const resultRegistered = registered;
      const resultStreet = resultLocation.street;
      const resultPhone = phone;
      const resultEmail = email;

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