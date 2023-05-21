import { favorites } from "./view.js";
import { favoritesArray } from "./favoritesArray.js";

export function addQuestionnaire(questionnaireName) {
  const questionnaire = favoritesArray.find((item) => item.name === questionnaireName);
  const {name: favoriteName, age: favoriteAge, photo } = questionnaire;

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
  const buttonHide = document.createElement('button');
  const pictureMore = document.createElement('img');
  const pictureHide = document.createElement('img');
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
  age.textContent = favoriteAge;

  cardMiddle.classList.add('favorites__card-middle', 'hidden');
  card.append(cardMiddle);

  street.classList.add('favorites__street', 'excerpt');
  cardMiddle.prepend(street);
  street.textContent = 'Street: Lake Road, 650';

  phone.classList.add('favorites__phone', 'excerpt');
  cardMiddle.append(phone);
  phone.textContent = 'Phone: (894)-112-3785';

  email.classList.add('favorites__email', 'excerpt');
  cardMiddle.append(email);
  email.textContent = 'Email: angel.jennings@example.com';

  cardBottom.classList.add('favorites__card-bottom');
  card.append(cardBottom);

  buttonMore.classList.add('favorites__btn', 'btn-reset');
  cardBottom.prepend(buttonMore);

  buttonHide.classList.add('favorites__btn', 'btn-reset', 'hidden');
  cardBottom.append(buttonHide);

  pictureMore.classList.add('favorites__picture');
  pictureMore.src = 'img/more.svg';
  pictureMore.alt = 'more';
  buttonMore.prepend(pictureMore);

  pictureHide.classList.add('favorites__picture');
  pictureHide.src = 'img/hide.svg';
  pictureHide.alt = 'hide';
  buttonHide.prepend(pictureHide);

  information.classList.add('favorites__information');
  cardBottom.append(information);

  location.classList.add('favorites__location', 'descr');
  information.prepend(location);
  location.textContent = 'New Zealand, Napier';

  registered.classList.add('favorites__registered', 'descr');
  information.append(registered);
  registered.textContent = 'Registered 8 years ago';
};