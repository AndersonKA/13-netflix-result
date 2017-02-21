import 'whatwg-fetch';
import fillInResult from './fill-in-results';

// * [ ] Create Variables for the search form, search input, and search result
const searchForm = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-field');
const searchResult = document.querySelector('.main');

// make a new function with a new argument
function fillInMovie(test) {
  // look for the API and add the argument to the end
  fetch(`http://netflixroulette.net/api/api.php?title=${test}`)

  .then(response => response.json())
  .then((data) => {
    fillInResult(searchResult, data);
  });
}
// when the search button is clicked on
searchForm.addEventListener('click', () => {
  fillInMovie(searchInput.value);
});
