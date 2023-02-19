// function changeTextToCapitalize(text) {
//   return text[0].toUpperCase() + text.slice(1).toLowerCase();
// }

// function showPersonalInfo(content, id) {
// if (id === 'first_name' || id === 'father_name') {
//   content = content[0].toUpperCase() + ".";
// }
//   const ELEMENT = document.getElementById(`output_${id}`);
//   ELEMENT.innerHTML = changeTextToCapitalize(content);
// }

// function getPersonalInfo(e) {
// const VALUE = e.target.value;
// const ID_ELEMENT = e.target.id;
// showPersonalInfo(VALUE, ID_ELEMENT);
// }

let personalInfo = [
  {
    id: '1',
    first_name: 'John',
    last_name: 'Doe',
    fathers_name: 'Hohn',
    comments: []
  },
  {
    id: '2',
    first_name: 'Jane',
    last_name: 'Doe',
    fathers_name: 'Hohn',
    comments: []
  },
  {
    id: '3',
    first_name: 'Peter',
    last_name: 'Kowalski',
    fathers_name: 'Piiiddi',
    comments: []
  }
]

function showPostsOnPage(posts, id) {
  // 1. Forming the HTML for the post
  let html = '';
  posts.forEach((post) => {
    const { id, first_name, last_name, fathers_name, comments } = post;
    html += `
    <div id="${id}" class="person__card">
      <h1 class="person__card_inicials">${last_name} ${fathers_name[0]} ${first_name[0]}.</h1>
      <p class="person__card_comments"></p>
      <button class="addButton">Add coments</button>
    </div>
    `
  })
  // 2. Inserting the HTML into the DOM
  const TARGET = document.getElementById(id);
  TARGET.innerHTML = html;
}

const ADD_BUTTON = document.getElementsByClassName('.addButton');
ADD_BUTTON.forEach((btn) => {
btn.addEventListener('click', (e) => {

})
});

ADD_BUTTON.addEventListener('click', (e) => {
  alert('add comment')
});

document.addEventListener('DOMContentLoaded', ()=>{
  showPostsOnPage(personalInfo, 'posts')
});