import './styles.css';
import cardsConstructor from './modules/cardsConstructor.js';
import getLikes from './modules/getLikes.js';
import giveLikes from './modules/giveLikes.js';
import likeCounter from './modules/likeCounter.js';
import getcomments from './modules/getcomments';import counterForAllLikes from './modules/counterForAllLikes.js';
import counterForAllCards from './modules/counterForAllCards.js';

const counterCarsHolder = document.querySelector('.carsCounter');
const counterLikesHolder = document.querySelector('.likesCounter');

counterForAllLikes();
cardsConstructor();
counterCarsHolder.textContent = counterForAllCards();
giveLikes();
getcomments(1);

setInterval(async () => {
  counterLikesHolder.textContent = await counterForAllLikes();
}, 1000);

window.onload = () => {
  getLikes();
  setInterval(likeCounter, 1000);
};
