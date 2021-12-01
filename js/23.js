//POO PROGRAMACIÓN ORIENTADA A OBJETOS

//objeto literal o código duro
const producto = {
  nombre: 'Tablet',
  precio: 500,
};

//object constructor
function Producto(nombre, precio) {
  //Producto es una clase, es el contenedor de los datos
  this.nombre = nombre;
  this.precio = precio;
}
//prototype permite crear funciones que solo se utilizan en un objeto específico
Producto.prototype.formatearProducto = function () {
  return `${this.nombre} cuesta ${this.precio}`;
};

console.log(producto);

const producto2 = new Producto('Monitor curvo 60"', 800);
const producto3 = new Producto('Tv  60"', 1800);

function formatearProducto(producto) {
  return `${producto.nombre} cuesta ${producto.precio}`;
}
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
