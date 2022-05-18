"use strict";
/**
 *
 * Crea una función "initAlarm" que reciba como argumento un número de
 * segundos.
 *
 * La función deberá mostrar por consola una cuenta atrás hasta llegar
 * a 0, en ese momento muestra un mensaje que indique que la alarma está
 * sonando.
 *
 * Bonus: Haz otra función que sea "setAlarmDelay", que reciba como
 * argumento el número de segundos de espera hasta que se inicia la alarma.
 *
 *
 */

const initAlarm = (numSeg) => {
  const intervalID = setInterval(() => {
    console.log(numSeg);
    numSeg--;

    if (numSeg === 0) {
      console.log("La alarma esta sonando");
      setTimeout(() => {
        clearInterval(intervalID);
      }, numSeg);
    }
  }, 1000);
};

// initAlarm(10);

const setAlarmDelay = (segEspera) => {
  setTimeout(() => {
    initAlarm(10);
  }, segEspera * 1000);
};

setAlarmDelay(3);
