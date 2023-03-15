const popupContainer = document.querySelector('.popup-display');

const Popup = async (
    id,
    image,
    Model,
    price,
    color,   
) => {
    popupContainer.innerHTML = '';

    popupContainer.innerHTML += `
    <div class = "best-cars-${id} cars-img-section">
        <img src=${image.original} alt="" class="cars-img" />
        <div class="close-icon">X</div>
      </div>

      <h2 class = "cars-popup-title">${Model}</h2>
      <div class="movie-features">+
      <p>price: ${price}</p>
      <p>color: ${color}</p>
      </div>

      `;
};
