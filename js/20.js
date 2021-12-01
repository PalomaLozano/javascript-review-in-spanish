//FOR LOOPS
//iteradores for loop, while loop, do while loop

//FOR LOOP
//i comienza en 0; si i es igual o menor que 10; ejecuta incrementando de uno en uno del 0 al 10
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    //i se divide entre dos, y si el resultado es 0, los números son pares
    console.log(`es un número ${i} es par`);
  } else {
    console.log(`el número ${i} es impar`);
  }
}

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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

//WHILE LOOP

let i = 0; //valor inicial
while (i < 10) {
  //condición
  if (i % 2 === 0) {
    console.log(`número par ${i}`);
  } else {
    console.log(`${i} impar`);
  }

  i++; //incremento
}
//primero revisa si la condición es cierta y luego la ejecuta

//DO WHILE LOOP

let i = 0;

do {
  console.log(i);

  i++;
} while (i < 10);

//la diferencia con while es que do while ejecuta el código antes de revisar que la condición se cumpla
