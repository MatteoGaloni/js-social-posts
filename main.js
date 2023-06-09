const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];
// *****Ciclo sull'array per ottenere gli oggetti all'interno******
for (let i = 0; i < posts.length; i++) {
  const elContainer = document.getElementById("container");
  const d = new Date(posts[i].created.toString());
  const newDate = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  let tagContent = `<div id="${i + 1}" class="post">`;
  tagContent += `<div class="post__header">`;
  tagContent += `<div class="post-meta">`;
  tagContent += `<div class="post-meta__icon">`;
  if (posts[i].author.image == null) {
    tagContent += `<div class="profile-pic-default">`;
    tagContent += `<span>LF</span>`;
    tagContent += `</div>`;
    // posts[i].author.image =
    //   "https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80";
  } else {
    tagContent += `<img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">`;
  }
  tagContent += `</div>`;
  tagContent += `<div class="post-meta__data">`;
  tagContent += `<div class="post-meta__author">${posts[i].author.name}</div>`;
  tagContent += `<div class="post-meta__time">${newDate}</div>`;
  tagContent += `</div>`;
  tagContent += `</div>`;
  tagContent += `<div class="post__text">${posts[i].content}</div>`;
  tagContent += `<div class="post__image">`;
  tagContent += `<img src="${posts[i].media}" alt="">`;
  tagContent += `</div>`;
  tagContent += `<div class="post__footer">`;
  tagContent += `<div class="likes js-likes">`;
  tagContent += `<div class="likes__cta">`;
  tagContent += `<a class="like-button  js-like-button" href="#" data-postid="${
    i + 1
  }">`;
  tagContent += `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`;
  tagContent += `<span class="like-button__label">Mi Piace</span>`;
  tagContent += `</a>`;
  tagContent += `</div>`;
  tagContent += `<div class="likes__counter">`;
  tagContent += `Piace a <b id="like-counter-${
    i + 1
  }" class="js-likes-counter">${posts[i].likes}</b> persone`;
  tagContent += `</div>`;
  tagContent += `</div>`;
  tagContent += `</div>`;
  tagContent += `</div>`;
  elContainer.innerHTML += tagContent;
}
// creo ciclo per incrementare contatore like e aggiungere classe
let arrayCounter = [];
const like = document.getElementsByClassName(`js-like-button`);
for (let index = 0; index < like.length; index++) {
  const likeElement = like[index];
  likeElement.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(likeElement);
    likeCounter = document.querySelector(`#like-counter-${index + 1}`);
    if (!arrayCounter.includes(likeCounter)) {
      arrayCounter.push(likeCounter);
      likeCounter.innerHTML = posts[index].likes += 1;
      likeElement.classList.add("like-button--liked");
    } else {
      arrayCounter.pop(likeCounter);
      likeElement.classList.remove("like-button--liked");
      likeCounter.innerHTML = posts[index].likes -= 1;
    }
    // console.log(posts[index].likes);
  });
}
console.log(arrayCounter);
