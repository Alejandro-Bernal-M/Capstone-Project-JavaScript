export default async () => {
  const comments = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hKLSytbuJWenzwwIdsnm/comments?item_id=example/').then((response) => response.json());
  const data = await comments;
  console.log(data);
  return data;
};