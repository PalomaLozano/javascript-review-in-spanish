//condicionales

const puntos = 1000;
const puntos2 = 900;

if (puntos === 1000) {
  console.log('Sí; el puntaje es 1000');
} else {
  console.log('No, el puntaje no es 900');
} // cuando los puntos no sean igual a 1000, se ejecuta else

if (puntos !== 1000) {
  console.log('No, el puntaje no es igual a 1000');
} else {
  console.log('Distinto puntaje a 1000');
}
// !== no es igual al valor

if (puntos2 !== 1000) {
  console.log('No, el puntaje no es igual a 1000');
} else {
  console.log('Distinto puntaje a 1000');
}

const efectivo = 1000;
const carrito = 800;
//mayor que >
if (efectivo > carrito) {
  console.log(' el cliente puede pagar');
} else {
  console.log('el cliente no puede pagar');
}

const rol = ' admin';
const rol2 = 'editor';

if (rol === 'admin') {
  console.log('tiene acceso');
} else if (rol2 === 'editor') {
  console.log('puedes editar el contenido');
} else {
  console.log('no tiene acceso');
}
