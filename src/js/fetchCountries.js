import Notiflix from 'notiflix';
const URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name) {
  return fetch(
    `${URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if(response.status === 404) {
       Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    if(!response.ok) {
      throw new Error(`Data faild${response}`)
    }
    
    return response.json();
  });
}