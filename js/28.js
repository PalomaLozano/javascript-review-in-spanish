//async / await

function descargarClientes() {
  return new Promise((resolve) => {
    console.log('descargando clientes... ');

    setTimeout(function () {
      resolve('Clientes descargados');
    }, 5000);
  });
}

//función asíncrona, async es la promesa lo que dice que va a devolver, await es esperar a que resuelva la promesa mientras se están ejecutando otras tareas de forma normal

async function app() {
  try {
    const resultado = await descargarClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

app();

// setTimeout(function () {
//   console.log('set time out');
// }, 5000);

// setInterval(function () {
//   console.log('set interval');
// }, 5000);
