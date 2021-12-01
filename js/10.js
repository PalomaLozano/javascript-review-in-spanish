const producto = {
  nombreProducto: 'Monitor 20px',
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: '1kg',
  medida: '1m',
};

const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);
