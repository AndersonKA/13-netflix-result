import 'whatwg-fetch';


// * [ ] Create Variables for the search form, search input, and search result
// * [ ] Netflix Result Function
// * [ ] Create a module `fill-in-result.js` that exports a function
// * [ ] accepts two arguments
// * [ ] element to fill in
// * [ ] data object (see example response data below)
// * [ ] Fill in the elements within the element argument using the data from the argument (see below for an example response)
// * [ ] Hooking Up Starting Values (in `index.js`)
// * [ ] Import the module `fill-in-result` (name the imported module whatever you want)
// * [ ] Fetching data
// * [ ] Make a fetch request to `http://netflixroulette.net/api/api.php?title=Attack%20on%20titan`
// * [ ] Use a `then` promise chain to unravel the JSON response from the API
// * [ ] In the `then` callback:
// * [ ] run the `fillInResult` function passing in the wrapping element and the resulting object from the fetch request
// * [ ] Listen for `submit` events to your search button
// * [ ] Make a new fetch request when the page is submitted replacing `Attack%20on%20titan` with the input value from your form
// * [ ] When the fetch finishes
// * [ ] Use a `then` promise chain to unravel the JSON response from the API
// * [ ] In the `then` callback:
// * [ ] run the `fillInResult` function passing in the wrapping element and the resulting object from the fetch request
// For this one you won't need to `createElement` in JS. Just query selector it up and change contents based on the data you get from the API
