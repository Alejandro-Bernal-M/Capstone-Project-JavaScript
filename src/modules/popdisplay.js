import popup from './popup.js';

export default () => {
  const popups = document.querySelector('.popup-display');
  const btns = document.querySelectorAll('.btncom');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      popups.style.display = 'block';
      popup(btn, btn.parentNode.id);
    });
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      popups.style.display = 'none';
    });
  });
};