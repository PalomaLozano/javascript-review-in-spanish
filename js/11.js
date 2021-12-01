//arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo'];
console.table(meses);

const array = [
  'Hola',
  10,
  true,
  'si',
  null,
  { nombre: 'palo', trabajo: 'programadora' },
  [1, 2, 3],
];

//acceder a los valores de un array
console.log(array[5]);

//conocer la extensión de array
console.log(meses.length);

//itirenación
numeros.forEach(function (numeros) {
  console.log(numeros);
});

//agregar o modificar arrays, no es tan común
numeros[5] = 60;

//push agrega al final del array
numeros.push(70);

//unshift para agregarlo al inicio
numeros.unshift(-10, -20, -30);
console.log(numeros);

//pop elimina el último elemento

//shift elimina el primer elemento

//splice elimina el que escojes
//desde la posición 2 elimina 1 número
meses.splice(2, 1);
console.log(meses);

//rest o spread operator
const newArray = [...meses, 'Junio'];
console.log(newArray);
