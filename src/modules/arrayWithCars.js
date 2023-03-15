export default async () => {
  const arrayOfCars=[];
  const acura = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/01/modelos/1/anos/1992-1').then((res) => res.json());
  const prices = await acura.Valor;
  const model = await acura.Modelo;
  arrayOfCars.push({
    name: model,
    price: prices
  });
  const agrale = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/02/modelos/4564/anos/2015-3').then((res) => res.json());
  const priceAgrale = agrale.Valor;
  const modelAgrale = agrale.Modelo;
  arrayOfCars.push({
    name: modelAgrale,
    price: priceAgrale
  });
  const alfa = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/03/modelos/6/anos/1998-1').then((res) => res.json());
  const priceAlfa = alfa.Valor;
  const modelAlfa = alfa.Modelo; 
  arrayOfCars.push({
    name: modelAlfa,
    price: priceAlfa
  });
  const amgem = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/04/modelos/21/anos/2000-3').then((res) => res.json());
  const priceAmgem = amgem.Valor;
  const modelAmgem = amgem.Modelo; 
  arrayOfCars.push({
    name: modelAmgem,
    price: priceAmgem
  });
  const asia = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/05/modelos/32/anos/1999-3').then((res) => res.json());
  const priceAsia = asia.Valor;
  const modelAsia = asia.Modelo; 
  arrayOfCars.push({
    name: modelAsia,
    price: priceAsia
  });
  const audi = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/06/modelos/8038/anos/2018-1').then((res) => res.json());
  const priceAudi = audi.Valor;
  const modelAudi = audi.Modelo; 
  arrayOfCars.push({
    name: modelAudi,
    price: priceAudi
  });
  
   return arrayOfCars;

}