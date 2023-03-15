export default () => {
  let counter = 0;
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i += 1) {
    counter += 1;
  }
  return counter;
};