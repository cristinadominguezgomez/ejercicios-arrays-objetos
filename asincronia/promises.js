/**
 * Si ejecutamos el código aportado más adelante, el orden de los procesos no serán correctos.
 * Utiliza en Promise para que el tercer proceso no se ejecute hasta que acabe el segundo.
 */

// let x = 15;

// console.log("1- Iniciando el proceso");
// setTimeout(() => {
//   console.log("2 - Procesando...");
//   x = x + 10;
//   console.log(x);
// }, 3000);

// console.log("3 - Proceso terminado. Resultado: " + x);

let x = 15;

console.log("1- Iniciando el proceso");
const getResult = async () => {
  console.log("2 - Procesando...");
  await new Promise((res) => {
    setTimeout(() => {
      x = x + 10;
      console.log("3 - Proceso terminado. Resultado: " + x);
    }, 3000);
  });
};

getResult();
