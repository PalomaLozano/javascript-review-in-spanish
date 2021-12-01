//MÉTODO SWITCH

const metodoPago = 'cheque';

//es un condicional también
switch (metodoPago) {
  case 'tarjeta':
    console.log('Pagaste con tarjeta');
    break; //break para de ejectuar el código
  case 'cheque':
    console.log('pagaste con cheque');
    break;
  default:
    //sería como el else
    console.log('aún no has pagado');
    break;
}
