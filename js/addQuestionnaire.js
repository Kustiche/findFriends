import { favorites } from "./view.js";
import { favoritesArray } from "./favoritesArray.js";

export function addQuestionnaire(questionnaireName) {
  const questionnaire = favoritesArray.find((item) => item.name === questionnaireName);
  const {name: favoriteName, age: favoriteAge, photo, location: locationText, registered: registeredAge, street: streetText, phone: phoneText, email: emailText} = questionnaire;

  const card = document.createElement('div');
  const img = document.createElement('img');
  const button = document.createElement('button');
  const svgDelete = document.createElement('img');
  const cardTop = document.createElement('div');
  const name = document.createElement('span');
  const age = document.createElement('span');
  const cardMiddle = document.createElement('div');
  const street = document.createElement('span');
  const phone = document.createElement('span');
  const email = document.createElement('span');
  const cardBottom = document.createElement('div');
  const buttonMore = document.createElement('button');
  const information = document.createElement('div');
  const location = document.createElement('span');
  const registered = document.createElement('span');

  card.classList.add('favorites__card');
  favorites.prepend(card);

  img.classList.add('favorites__img');
  img.src = photo;
  card.prepend(img);

  button.classList.add('favorites__btn-delete', 'btn-reset');
  card.append(button);

  svgDelete.classList.add('favorites__delete');
  svgDelete.src = 'img/delete.svg';
  svgDelete.alt = 'delete';
  button.prepend(svgDelete);

  cardTop.classList.add('favorites__card-top');
  card.append(cardTop);

  name.classList.add('favorites__name', 'text');
  cardTop.prepend(name);
  name.textContent = favoriteName;

  age.classList.add('favorites__age', 'text');
  cardTop.append(age);
  age.textContent = favoriteAge + ' y.o.';

  cardMiddle.classList.add('favorites__card-middle', 'hidden');
  card.append(cardMiddle);

  street.classList.add('favorites__street', 'excerpt');
  cardMiddle.prepend(street);
  street.textContent = `Street: ${streetText}`;

  phone.classList.add('favorites__phone', 'excerpt');
  cardMiddle.append(phone);
  phone.textContent = `Phone: ${phoneText}`;

  email.classList.add('favorites__email', 'excerpt');
  cardMiddle.append(email);
  email.textContent = `Email: ${emailText}`;

  cardBottom.classList.add('favorites__card-bottom');
  card.append(cardBottom);

  buttonMore.classList.add('favorites__btn', 'btn-reset');
  cardBottom.prepend(buttonMore);
  buttonMore.textContent = 'More';

  information.classList.add('favorites__information');
  cardBottom.append(information);

  location.classList.add('favorites__location', 'descr');
  information.prepend(location);
  location.textContent = locationText;

  registered.classList.add('favorites__registered', 'descr');
  information.append(registered);
  registered.textContent = `Registered ${registeredAge} years ago`;
};