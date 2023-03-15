const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hKLSytbuJWenzwwIdsnm/comments/';
export default async (id,name,comments) => {
    const item = {
    item_id: id,
    username: name,
    comment: comments,
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
 };

  const res = await fetch(url, config);
  console.log(res)
  return res;
};

