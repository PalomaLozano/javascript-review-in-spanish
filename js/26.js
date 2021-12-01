//PROMISES

const usuarioAuth = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve('User authenticated'); //promise se cumple
  } else {
    reject('User non authenticated'); //promise no se cumple
  }
});

usuarioAuth
  .then(function (resultado) {
    //resolve
    console.log(resultado);
  })
  .catch(function (error) {
    //reject
    console.log(error);
  });

//En los promises existen 3 valores posibles:
//Pending=> No se ha cumplido pero tampoco se ha rechazado
//Fulfilled=>  Ya se ha cumplido
//Rejected => Se ha rechazado o no se ha podido cumplir
