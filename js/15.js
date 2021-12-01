function sumar(n1, n2) {
  //funciones que retornan valores
  return n1 + n2;
}
const resultado = sumar(2, 3);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);

console.log(total);

const totalAPagar = Math.round(calcularImpuesto(total));

console.log(totalAPagar);
console.log(`El total a pagar es ${totalAPagar}$`);
