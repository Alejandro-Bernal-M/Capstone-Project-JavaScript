export default (id) => {
  let trueOrFalse;
  const storage = JSON.parse(localStorage.getItem('likes'));
  if (storage[id].liked === true) {
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
};