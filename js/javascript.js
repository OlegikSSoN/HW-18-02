const POSTS = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 1 body',
      price: 400,
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Post 2 body',
      price: 500,
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Post 3 body',
      price: 200,
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    }
  ]

function showPost(posts) {
    let html = '';
    POSTS.forEach((post) => {
      html += `
      <div id="${post.id}" class="item">
        <h2 class="item__title">${post.title}</h2>
        <p class="item__text">${post.price}</p>
        <p class="item__text">${post.body}</p>
    </div>
    `
    });
    const TARGET = document.querySelector('#posts_list');
    TARGET.innerHTML = html;
  }

  function addPost(e) {
    e.preventDefault();
    // 1. Getting the data from the form
    const TITLE = document.getElementById('title').value
    const BODY = document.getElementById('description').value
    const PRICE = document.getElementById('price').value
    // 2. Forming the post object
    const POST = {
      id: POSTS.length + 1,
      title: TITLE,
      price: PRICE,
      body: BODY,
      comments: []
    }
    // 3. Adding the post to the array
    POSTS.push(POST)
    // 4. Showing the posts on the page
    showPost()
    // 5. Clearing the form
    const FORM = document.querySelector('form');
    FORM.reset();
  }

  function showTextArea() {
    const CHECKBOX = document.getElementById('box');
    const CHECKED = CHECKBOX.checked;
    const TEXTAREA = document.getElementById('content')

  CHECKED ? TEXTAREA.classList.add('show') : TEXTAREA.classList.remove('show')
  }

  function filterPoataByPrice() {
    const MIN_PRICE = document.getElementById('filter_price').value;
    const FILTERED_POSTS = POSTS.filter((post) => {
return post.price >= MIN_PRICE;
    });
    showPost(FILTERED_POSTS);
  }

  document.addEventListener('DOMContentLoaded', () => {
    showPost(POSTS);
  })