/**
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con las distintas marcas de coches (no se pueden repetir).
 *
 *   5. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   6. Obtén la suma total de todos los precios.
 *
 */

"use strict";

const coches = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];
//   1. Obtén todos los coches de la marca Audi.

const cochesAudi = coches.filter((coche) => {
  return coche.marca === "Audi";
});

console.log(cochesAudi);

//   2. Obtén una lista con todos los colores de los coches de marca BMW.

const coloresCochesBMW = coches
  .filter((coche) => {
    return coche.marca === "BMW";
  })
  .map((coche) => {
    return coche.color;
  });

console.log(coloresCochesBMW);
console.log(new Set(coloresCochesBMW)); // colores sin repetir

//   3. Obtén la media de precio de los coches de marca Ford.

const cochesFord = coches.filter((coche) => {
  return coche.marca === "Ford";
});

const precioFord = cochesFord.reduce((previousValue, coche) => {
  return previousValue + coche.precio;
}, 0);

const mediaPrecioFord = (precioFord / cochesFord.length).toFixed(2);
console.log(mediaPrecioFord);

//   4. Obtén un array con las distintas marcas de coches (no se pueden repetir).

const marcasSinRepetir = new Set(
  coches.map((coche) => {
    return coche.marca;
  })
);
console.log(marcasSinRepetir);

//   5. Obtén un array con los coches de transmisión manual y de color negro.

const cochesManualNegro = coches.filter((coche) => {
  return coche.color === "Negro" && coche.transmision === "manual";
});

console.log(cochesManualNegro);

//   6. Obtén la suma total de todos los precios.

const sumaTotal = coches.reduce((previousValue, coche) => {
  return previousValue + coche.precio;
}, 0);

console.log(sumaTotal);
