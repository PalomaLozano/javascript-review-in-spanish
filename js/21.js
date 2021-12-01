//FOR EACH Y MAP

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

//forEach para iterar, también para mostrar el array en consola
carrito.forEach(function (producto) {
  console.log(producto);
});

//map para crear un nuevo array sobre el que ya existe, este por ejemplo solo es un array con los nombres de producto, no muestra los precios
carrito.map(function (producto) {
  console.log(producto.nombre);
});
