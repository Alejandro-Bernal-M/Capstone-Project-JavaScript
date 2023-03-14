import './styles.css';
import cardsConstructor from './modules/cardsConstructor.js';
import getLikes from './modules/getLikes.js';
import giveLikes from './modules/giveLikes.js';
import likeCounter from './modules/likeCounter.js';

cardsConstructor();
giveLikes();
window.onload = () => {
  getLikes();
  setInterval(likeCounter, 1000);
};
