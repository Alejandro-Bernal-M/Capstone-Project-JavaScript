import arrayWithCars from './arrayWithCars.js';
import cars from './carImg.js'
 
export default  async (
    btn
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

      `;
  const popups = document.querySelector('.popup-display');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popups.style.display = 'none';
    popupContainer.innerHTML = '';
  })
};

