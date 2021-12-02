//Fetch API te permite enviar información al servidor u obtener información de un servidr
//También puedes obtener un archivo local  o una respuesta de un servidor(texto o JSON)
//uitliza promises o también se puede usar con asyn await
//JSON es Javascipt Object Notation

const userHtml = document.querySelector('.user');
const jobHtml = document.querySelector('.job');
//const url = 'empleados.json';

// function obtenerEmpleados() {
//   fetch('empleados.json')
//     .then((resultado) => {
//       return resultado.json();
//     })
//     .then((datos) => {
//       //console.log(datos.empleados);
//       const { empleados } = datos;
//       //console.log(empleados);
//       empleados.forEach((empleado) => {
//         console.log(empleado);
//         console.log(empleado.puesto);
//         userHtml.innerHTML = empleado.nombre;
//         jobHtml.innerHTML = empleado.puesto;
//       });
//     });
// }

async function obtenerEmpleados() {
  const url = 'empleados.json';

  const resultado = await fetch(url);
  const dato = await resultado.json();

  console.log(dato);
}
obtenerEmpleados();
