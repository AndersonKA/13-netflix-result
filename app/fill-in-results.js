export default function fillInResult(element, data) {
  element.querySelector('.upper-title').innerText = data.show_title;
  element.querySelector('.upper-category').innerText = data.category;
  element.querySelector('.upper-rating').innerText = data.rating;
  element.querySelector('.upper-pic').src = data.poster;
  element.querySelector('.lower-summary__words').innerText = data.summary;
  element.querySelector('.lower-actors__words').innerText = data.show_cast;
}
