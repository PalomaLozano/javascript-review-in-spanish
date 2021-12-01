//declaración de la función
sumar();
function sumar() {
  console.log(10 + 5);
}

//hosting es el comportamiento por defecto de javascript consiste en moved declaraciones al principio
//expresión de la función

const sumar2 = function () {
  console.log(3 + 3);
};

const numero1 = 20;
const numero2 = '20';

//convertir de string a número
console.log(parseInt(numero2));
//convertir de número a string (esto es un método)
console.log(numero1.toString());
