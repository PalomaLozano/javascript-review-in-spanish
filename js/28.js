//async / await

function descargarClientes() {
  return new Promise((resolve) => {
    console.log('descargando clientes... ');

    setTimeout(function () {
      resolve('Clientes descargados');
    }, 5000);
  });
}

setTimeout(function () {
  console.log('set time out');
}, 5000);

setInterval(function () {
  console.log('set interval');
}, 5000);
