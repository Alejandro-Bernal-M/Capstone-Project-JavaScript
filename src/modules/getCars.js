export default async () => {
  const cars = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/').then((response) => response.json());
  const data = await cars.sort((a, b) => a.codigo - b.codigo);
  return data;
};