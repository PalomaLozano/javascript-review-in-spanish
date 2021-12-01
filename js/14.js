function sumar(numero1, numero2) {
  //parametros
  console.log(numero1 + numero2);
}
sumar(1, 1); //argumentos o valores reales

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};
sumar2(5, 10);

//default parametres

function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1, numero2);
}
sumar(10); //pone por defecto el valor dado en los parámetros
