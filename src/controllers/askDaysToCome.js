const readlineSync = require('readline-sync');

function askDaysToCome(){
  return readlineSync.question('Digite a quantidade de dias: ', {
    limit: (input) => {
      const numericInput = +input

      return numericInput > 0 && Number.isInteger(numericInput);
    },
    limitMessage: 'Desculpe, $<lastInput> nao e uma valor valido, por favor entre com um numero positivo e inteiro.'
  });
}

module.exports = askDaysToCome;
