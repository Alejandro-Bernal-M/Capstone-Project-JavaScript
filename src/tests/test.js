import counterForAllCards from '../modules/counterForAllCards.js';
import counterComments from '../modules/counterComments.js';

jest.mock('../modules/getcomments.js', (number) => ({
  __esModule: true,
  default: jest.fn(() => [{ number }]),
}));

describe('Test for counter all the items', () => {
  test('should be 1', () => {
    document.body.innerHTML = `
    <div class="card"></div>
    `;
    expect(counterForAllCards()).toEqual(1);
  });

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
  });
});

describe('Tests for counter all the comments', () => {
  test('Should be 6 comment', async () => {
    const counter = await counterComments();
    expect(counter).toEqual(6);
  });
});