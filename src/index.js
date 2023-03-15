import './styles.css';
import cardsConstructor from './modules/cardsConstructor.js';
import getLikes from './modules/getLikes.js';
import giveLikes from './modules/giveLikes.js';
import likeCounter from './modules/likeCounter.js';
import counterForAllLikes from './modules/counterForAllLikes.js';

const counterLikesHolder = document.querySelector('.likesCounter')

counterForAllLikes();

cardsConstructor();
giveLikes();

setInterval(async () =>{
 counterLikesHolder.textContent = await counterForAllLikes(); }, 1000);

window.onload = () => {
  getLikes();
  setInterval(likeCounter, 1000);
};
