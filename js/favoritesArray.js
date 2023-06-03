export let favoritesArray = [];

export function saveLocal() {
  favoritesArray = JSON.parse(localStorage.getItem('questionnairesArray'));

  if (favoritesArray === null) {
    favoritesArray = [];
  }
};