import counterForAllCards from '../modules/counterForAllCards.js';

describe('Test for counter all the items', () => {
  test('should be 1', () => {
    document.body.innerHTML = `
    <div class="card"></div>
    `;
    expect(counterForAllCards()).toEqual(1);
  })

  test('should be 6', () => {
    document.body.innerHTML = `
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    `;
    expect(counterForAllCards()).toEqual(6);
  })
})