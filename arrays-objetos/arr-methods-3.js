"use strict";

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */

const persons = [
  {
    name: "Pedro",
    age: 35,
    code: "ES",
    infected: true,
    petName: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    code: "UK",
    infected: true,
    petName: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    code: "ES",
    infected: false,
    petName: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    code: "DE",
    infected: false,
    petName: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    code: "UK",
    infected: true,
    petName: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    code: "US",
    infected: false,
    petName: "Pence",
  },
  {
    name: "Pepito",
    age: 36,
    code: "ES",
    infected: false,
    petName: "Carbón",
  },
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
  {
    petName: "Troski",
    type: "perro",
  },
  {
    petName: "Firulais",
    type: "perro",
  },
  {
    petName: "Berritxu",
    type: "loro",
  },
  {
    petName: "Noodle",
    type: "araña",
  },
  {
    petName: "Leon",
    type: "gato",
  },
  {
    petName: "Pence",
    type: "perro",
  },
  {
    petName: "Carbón",
    type: "gato",
  },
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
  {
    type: "perro",
    legs: 4,
  },
  {
    type: "araña",
    legs: 8,
  },
  {
    type: "gato",
    legs: 4,
  },
  {
    type: "loro",
    legs: 2,
  },
  {
    type: "gallina",
    legs: 2,
  },
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados del array de personas.
 *
 */

const personasInfectadas = persons.filter((person) => {
  return person.infected;
});

console.log(personasInfectadas);

/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */

const totalInfectados = countries.reduce((previousValue, countrie) => {
  return previousValue + countrie.infected;
}, 0);

console.log(totalInfectados);

/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */

const countriesInfectadosDeMenorAMayor = countries.sort((a, b) => {
  return a.infected - b.infected;
});

const paisConMasInfectados =
  countriesInfectadosDeMenorAMayor[countriesInfectadosDeMenorAMayor.length - 1]
    .name;

console.log(paisConMasInfectados);

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */

const nombresMascotas = persons.map((person) => {
  return person.petName;
});

console.log(nombresMascotas);

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */

const españolesConPerro = persons.filter((person) => {
  const mascota = pets.find((pet) => {
    return pet.petName === person.petName;
  });
  return mascota.type === "perro" && person.code === "ES";
});

console.log(españolesConPerro);

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota.
 *
 *  {
 *      name: 'Pedro',
 *      age: 35,
 *      country: 'ES',
 *      infected: true,
 *      petName: {
 *          petName: 'Troski',
 *          type: 'perro',
 *      }
 *  }
 *
 */

const personasConMascotas = persons.map((person) => {
  const copyPerson = { ...person };
  console.log(copyPerson);
  const mascota = pets.filter((pet) => {
    return pet.petName === copyPerson.petName;
  });
  copyPerson.petName = mascota;
  return copyPerson;
});

console.log(personasConMascotas);

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Número total de patas de las mascotas.
 *
 */
const totalPatas = persons.reduce((previousValue, person) => {
  const pet = pets.find((pet) => {
    return person.petName === pet.petName;
  });

  const animal = animals.find((animal) => {
    return animal.type === pet.type;
  });

  return previousValue + animal.legs;
}, 0);

console.log(totalPatas);

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */

const personasConAnimalesDe4Patas = persons.filter((person) => {
  const mascota = pets.find((pet) => {
    return person.petName === pet.petName;
  });
  const animal = animals.find((animal) => {
    return mascota.type === animal.type;
  });
  return animal.legs === 4;
});

console.log(personasConAnimalesDe4Patas);

/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

// const paisesConLoros = countries.filter((country) => {
//   const person = persons.filter((person) => {
//     return country.code === person.code);
//   };

const paisesConLoros = countries.filter((country) => {
  const personPorPaises = persons.filter((person) => {
    return country.code === person.code;
  });
  const petsPorPaises = personPorPaises.map((person) => {
    const pet = pets.find((pet) => {
      return person.petName === pet.petName;
    });
    return pet;
  });

  return petsPorPaises.some((pet) => {
    return pet.type === "loro";
  });
});

console.log(paisesConLoros);

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 *
 *
 */

const infectadosTotalesConMascotas8Patas = countries.filter((country) => {
  const personasPorPaises = persons.filter((person) => {
    return country.code === person.code;
  });

  const mascotasPorPais = personasPorPaises.map((person) => {
    const petsEncuentra = pets.find((pet) => {
      return person.petName === pet.petName;
    });
    return petsEncuentra;
  });

  const tipoDeAnimal = mascotasPorPais.map((pet) => {
    const animal = animals.find((animal) => {
      return pet.type === animal.type;
    });
    return animal;
  });

  const animal8Patas = tipoDeAnimal.some((animal) => {
    return animal.legs === 8;
  });
  return animal8Patas;
});

console.log(infectadosTotalesConMascotas8Patas);
