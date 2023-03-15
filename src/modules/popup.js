import arrayWithCars from './arrayWithCars.js';
import cars from './carImg.js';

export default async (
  btn,
) => {
  const array = await arrayWithCars();
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
      <form class="form" action="/" method="GET">
      <div class= "comment-container">
      <h2 class = "Add a comment">
      <div>
      <input id ="name" placeholder="your name" type="text">
      <input id ="insights" placeholder="your insights" type="text">
      </div>
      <button id = "button" class="btn" type="Submit">comment</button>
    </form>

      `;
  const popups = document.querySelector('.popup-display');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popups.style.display = 'none';
    popupContainer.innerHTML = '';

  });

  const form = document.querySelector('.form');
  form.addEventListener('submit',(e)=> {
    e.defaultPrevented(); // prevent the default from submission.

    const name = document.getElementById('name').value;
    const insights = document.getElementById('insights').value;

    comments(id,name,insights)

    
  })
};
