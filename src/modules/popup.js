import arrayWithCars from './arrayWithCars.js';
import cars from './carImg.js';
import comments from './comments.js';
import getcomments from './getcomments.js';

export default async (
  btn,
  id,
) => {
  const array = await arrayWithCars();
  const commentContent = await getcomments(id);
  const popupContainer = document.querySelector('.popup');
  popupContainer.innerHTML = '';
  popupContainer.innerHTML += `
    <div class="close">X</div>
    <div class = "best-cars">
        <img src="${cars[btn.parentNode.id].src}" alt="" class="cars-img" />
      </div>
      <h2 class = "cars-popup-title">${btn.parentNode.childNodes[1].childNodes[0].textContent}</h2>
      <div class="cars-features">
      <p>model:  ${array[btn.parentNode.id].name} </p>
      <p>price:  ${array[btn.parentNode.id].price}</p>
      </div>
      <div class="comment-and-form">
      <form class="form">
      <div class="formContent">
        <h2 class = "add-comment">Add a comment</h2>
        <input id ="name" placeholder="your name" type="text">
        <input id ="insights" placeholder="your insights" type="text">
        <button id = "button" class="btn" type="submit">Submit</button>
      </div>
      </form>
      <div class ="commentsHolder"></div>

      `;
  const popups = document.querySelector('.popup-display');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popups.style.display = 'none';
    popupContainer.innerHTML = '';
  });

  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default from submission.
    const name = document.getElementById('name').value;
    const insights = document.getElementById('insights').value;
    comments(id, name, insights);
  });
  const commentsDiv = document.querySelector('.commentsHolder');
  commentContent.forEach((obj) => {
    commentsDiv.innerHTML += `
    <div class="commentaries">
    <p class="commentName">Name= ${obj.username}</p>
    <p class="commentCom">Comment= ${obj.comment}</p>
    <p class="creationDate">Date and Time=${obj.creation_date}</p>
    `;
  });
  // commentsDiv.textContent = commentContent[0].comment;
};
