import getLikes from './getLikesFromAPI.js';

export default async () => {
  const likes = await getLikes();
  let counter = 0;
  likes.forEach((obj) => {
    if (obj.item_id !== 'example') {
      counter += obj.likes;
    }
  });
  return counter;
};