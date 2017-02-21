import 'whatwg-fetch';
import fillInResult from './fill-in-results';

// * [ ] Create Variables for the search form, search input, and search result
const searchForm = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-field');
const searchResult = document.querySelector('.main');

function fillInMovie(test) {
  fetch(`http://netflixroulette.net/api/api.php?title=${test}`)
  .then(response => response.json())
  .then((data) => {
    fillInResult(searchResult, data);
  });
}
searchForm.addEventListener('click', () => {
  fillInMovie(searchInput.value);
});

fillInMovie('Attack on Titan');
