import likeImg from '../like/like.png';
import noLike from '../like/nolike.png';

export default () => {
  if (localStorage.getItem('likes') === null) {
    localStorage.setItem('likes', JSON.stringify([{ id: '0', liked: false }, { id: '1', liked: false }, { id: '2', liked: false }, { id: '3', liked: false }, { id: '4', liked: false }, { id: '5', liked: false }]));
  }
  const storage = JSON.parse(localStorage.getItem('likes'));
  const likes = document.querySelectorAll('.likes');
  for (let i = 0; i < likes.length; i += 1) {
    if (storage[i].liked === true) {
      likes[i].style.backgroundImage = `url('${likeImg}')`;
      likes[i].classList.add('liked');
    } else {
      likes[i].style.backgroundImage = `url('${noLike}')`;
    }
  }
};