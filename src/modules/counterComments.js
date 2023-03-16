import getcomments from './getcomments.js';

export default async () => {
  let counter = 0;
  const acuraComments = await getcomments(0);
  const agraleComments = await getcomments(1);
  const alfaComments = await getcomments(2);
  const amgenComments = await getcomments(3);
  const asiamotorsComments = await getcomments(4);
  const audiComments = await getcomments(5);
  for (let i = 0; i < acuraComments.length; i += 1) {
    counter += 1;
  }
  for (let i = 0; i < agraleComments.length; i += 1) {
    counter += 1;
  }

  for (let i = 0; i < alfaComments.length; i += 1) {
    counter += 1;
  }

  for (let i = 0; i < amgenComments.length; i += 1) {
    counter += 1;
  }

  for (let i = 0; i < asiamotorsComments.length; i += 1) {
    counter += 1;
  }

  for (let i = 0; i < audiComments.length; i += 1) {
    counter += 1;
  }

  return counter;
};