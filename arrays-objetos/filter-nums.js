"use strict";
/**
 *
 * Crea una función que reciba un array de números y retorne otro array con los que sean
 * impares y mayores que 5.
 *
 */

const numeros = [2, 6, 25, 3, 1, 117, 17, 68];

const funcion = (array) => {
  const numMayor5Impar = array.filter((elem) => {
    if (elem > 5 && elem % 2 !== 0) {
      return elem;
    }
  });
  console.log(numMayor5Impar);
};

funcion(numeros);
