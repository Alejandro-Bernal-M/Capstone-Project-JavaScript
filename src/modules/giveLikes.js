import likeImg from '../like/like.png';
import setLikes from './setLikes.js';

export default async () => {
  const likes = document.querySelectorAll('.likes');
  likes.forEach((like) => {
    like.addEventListener('click', () => {
      like.style.boxShadow = '0px 0px 3px 3px red';
      like.style.backgroundImage = `url('${likeImg}')`;
      setTimeout(() => {
        like.style.boxShadow = '0px 0px';
      }, 3000);
      setLikes(like.previousSibling.textContent);
    });
  });
};