import 'whatwg-fetch';
import stuff from './fill-in-results';

// * [ ] Create Variables for the search form, search input, and search result
const searchForm = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-field');
const searchResult = document.querySelector('.upper');

function fillInMovie(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=Attack%20on%20titan${name}`).then((res) => {
    return res.json();
  }).then((data) => {
    fillInResult(data.results);
  });
}


searchForm.addEventListener('click', () => {
  fillInMovie(searchInput.value);
});

// * [ ] Make a new fetch request when the page is submitted replacing `
// Attack%20on%20titan` with the input value from your form
// * [ ] When the fetch finishes
// * [ ] Use a `then` promise chain to unravel the JSON response from the API
// * [ ] In the `then` callback:
// * [ ] run the `fillInResult` function passing in the wrapping element and the
// resulting object from the fetch request
//
//
//
// For this one you won't need to `createElement` in JS. Just query selector
// it up and change contents based on the data you get from the API;
