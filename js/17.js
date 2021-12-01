// arrow functions

const sumar = (n1, n2) => {
  console.log(n1 + n2);
};
sumar(2, 5);

const aprendiendo = (tecnologia) => {
  console.log(`Aprendiendo ${tecnologia}`);
};

aprendiendo('JavaScript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//array con objectos
const carrito = [
  { nombre: 'Monitor 20p', precio: 500 },
  { nombre: 'Television 50p', precio: 700 },
  { nombre: 'Tablet 12p', precio: 200 },
  { nombre: 'Audífonos', precio: 500 },
  { nombre: 'Teclado', precio: 50 },
  { nombre: 'Móvil', precio: 500 },
  { nombre: 'Bocinas', precio: 300 },
  { nombre: 'Laptop', precio: 800 },
];

//forEach
meses.forEach((mes) => {
  if ((mes = 'Marzo')) {
    console.log(`${mes} sí existe`);
  }
});

//includes
const resultado1 = meses.includes('Marzo');

//con array de objetos no sirve includes, se usa .some

let resultado = carrito.some((producto) => {
  return producto.nombre === 'Móvil';
});

console.log(resultado);

//reduce recoge todo los números y los suma dando un resultado total
resultado = carrito.reduce((total, producto) => {
  return total + producto.precio;
}, 0);
//0 es el valor inicial por el que empezamos a sumar
console.log(resultado);

//filter
resultado = carrito.filter((producto) => {
  return producto.precio > 400;
});

console.log(resultado);

resultado = carrito.filter((producto) => {
  return producto.nombre === 'Móvil';
});

console.log(resultado);
