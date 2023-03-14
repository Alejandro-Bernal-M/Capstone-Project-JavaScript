import getLikes from './getLikes.js';

export default async () => {
  const likeCounters = document.querySelectorAll('.likeCounter');
  const likes = await getLikes();
  likeCounters.forEach((counter) => {
    for (let i = 0; i < likes.length; i += 1) {
      if (likes[i].item_id === counter.parentNode.childNodes[1].childNodes[0].textContent) {
        counter.innerHTML = `likes ${likes[i].likes}`;
      }
    }
  });
  likeCounters.forEach((counter) => {
    if (counter.textContent === '') {
      counter.textContent = 'likes 0';
    }
  });
};