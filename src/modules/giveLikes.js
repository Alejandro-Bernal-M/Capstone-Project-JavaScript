import likeImg from '../like/like.png';
import setLikes from './setLikesToAPI.js';
import setLocalStorage from './setLocalStorage.js';
import checkLocalStorage from './checkLocalStorage.js';

export default async () => {
  const likes = document.querySelectorAll('.likes');
  likes.forEach((like) => {
    like.addEventListener('click', () => {
      like.style.boxShadow = '0px 0px 3px 3px red';
      like.style.backgroundImage = `url('${likeImg}')`;
      like.classList.add('liked');
      setTimeout(() => {
        like.style.boxShadow = '0px 0px';
      }, 3000);
      if (checkLocalStorage(like.parentNode.parentNode.id) === false) {
        setLikes(like.previousSibling.textContent);
      }
      setLocalStorage();
    });
  });
};