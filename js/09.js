'use strict';

//objects
const producto = {
  nombreProducto: 'Monitor 20px',
  precio: 300,
  disponible: true,
};

//method objects
Object.freeze(producto); //no permite agregar más propiedades al objeto ni eliminar
Object.seal(producto); // previene la eliminación de los objetos existentes pero no previene de los cambios

//producto.imagen = 'imagen.jpg';

//destructuring extrae valor y crea variable

// const { precio } = producto;
// const { nombreProducto } = producto;
// const { disponible } = producto;

const { precio, nombreProducto, disponible } = producto;

console.log(disponible);
