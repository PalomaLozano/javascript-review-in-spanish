//this hace referencia sobre el objeto en donde se está llamando a la función,   (escoge las propiedades del mismo objeto en donde se está ejecutando la función)

const reserva = {
  nombre: 'Palo',
  apellido: 'Fernandez',
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(
      `El cliente se llama ${this.nombre} ${this.apellido} y su cantidad a pagar es ${this.total}$`
    );
  },
};

const reserva2 = {
  nombre: 'Jose',
  apellido: 'FGomez',
  total: 8000,
  pagado: false,
  informacion: function () {
    console.log(
      `El cliente se llama ${this.nombre} ${this.apellido} y su cantidad a pagar es ${this.total}$`
    );
  },
};

reserva.informacion();
reserva2.informacion();
