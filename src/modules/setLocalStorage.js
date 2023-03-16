export default () => {
  const arrayToStorage = [];
  const likes = document.querySelectorAll('.likes');
  likes.forEach((element) => {
    if (element.classList.contains('liked')) {
      arrayToStorage.push({ id: element.parentNode.parentNode.id, liked: true });
    } else {
      arrayToStorage.push({ id: element.parentNode.parentNode.id, liked: false });
    }
  });
  localStorage.setItem('likes', JSON.stringify(arrayToStorage));
};