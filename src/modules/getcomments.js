export default async (number) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hKLSytbuJWenzwwIdsnm/comments?item_id='
  const comments = await fetch(`${url}${number}`).then((response) => response.json());
  const data = await comments;
  return data;
};