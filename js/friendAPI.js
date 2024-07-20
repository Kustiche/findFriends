import { name, age, photo } from "./view.js";
export let locationTextAPI = "";
export let registeredAgeAPI = "";
export let streetAPI = "";
export let phoneAPI = "";
export let emailAPI = "";
const url = "https://randomuser.me/api/?noinfo";

export function friendAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((result) => {
      const {
        name: questionnaireName,
        dob,
        picture,
        registered,
        location: { street, country, city },
        phone,
        email,
      } = result;
      const resultName = questionnaireName;
      const resultDob = dob;
      const resultPhoto = picture;
      const resultRegistered = registered;
      const resultStreet = street;
      const resultPhone = phone;
      const resultEmail = email;

      streetAPI = resultStreet.name;
      phoneAPI = resultPhone;
      emailAPI = resultEmail;
      registeredAgeAPI = resultRegistered.age;
      locationTextAPI = country + ", " + city;
      name.textContent = resultName.first + " " + resultName.title + " " + resultName.last;
      age.textContent = resultDob.age;
      photo.src = resultPhoto.large;
    });
}
