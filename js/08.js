//objects

// const nombreProducto = 'Monitor 20px';
// const precio = 300;
// const disponible = true;

const producto = {
  nombreProducto: 'Monitor 20px',
  precio: 300,
  disponible: true,
};

console.log(producto);
console.log(producto.precio);

console.log(producto['precio']);

//agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
//eliminar propiedades
delete producto.disponible;
console.log(producto);
