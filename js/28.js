//async / await

function descargarClientes() {
  return new Promise((resolve) => {
    console.log('descargando clientes... ');

    setTimeout(function () {
      resolve('Clientes descargados');
    }, 5000);
  });
}

function descargarPedidos() {
  return new Promise((resolve) => {
    console.log('descargando pedidos... ');

    setTimeout(function () {
      resolve('Pedidos descargados');
    }, 3000);
  });
}

//función asíncrona, async es la promesa lo que dice que va a devolver, await es esperar a que resuelva la promesa mientras se están ejecutando otras tareas de forma normal

async function app() {
  try {
    // const clientes = await descargarClientes();
    // const pedidos = await descargarPedidos();
    // console.log(clientes);
    const resultado = await Promise.all([
      descargarClientes(),
      descargarPedidos(),
    ]);
    //con Promise.all() hacemos que tomen el mismo tiempo de descarga, ya que uno estaba en 5 segundos y el otro en 3 segundos. Con este array hacemos que ambos se descarguen en 5 segundos.

    console.log(resultado[0]);
    console.log(resultado[1]);
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
