const POSTS = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 1 body',
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Post 2 body',
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Post 3 body',
      comments: [
        'Comment 1', 'Comment 2', 'Comment 3'
      ]
    }
  ]

  function showPost() {
    let html = '';
    POSTS.forEach((post) => {
      html += `
      <div id="${post.id}" class="item">
        <h2 class="item__title">${post.title}</h2>
        <p class="item__text">${post.body}</p>
    </div>
    `
    });
    const TARGET = document.querySelector('#posts_list');
    TARGET.innerHTML = html;
  }

  function addPost(e) {
e.preventDefoult();
const TITLE = document.getElementById('title').value
const BODY = document.getElementById('description').value

const POSTS = {
id: POSTS.leight + 1,
title: TITLE,
body: BODY,
comments: []
}
POSTS.push(POSTS)

showPost()
  }