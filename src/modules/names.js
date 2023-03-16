import getCars from './getCars.js';
import addName from './addName.js';

export default async () => {
  const h2s = document.querySelectorAll('.name');
  for (let i = 0; i < h2s.length; i += 1) {
    getCars().then((res) => addName(res[i], h2s[i]));
  }
};
