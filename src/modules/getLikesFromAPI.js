export default async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hKLSytbuJWenzwwIdsnm/likes/').then((response) => response.json());
  const data = await response;
  return data;
};