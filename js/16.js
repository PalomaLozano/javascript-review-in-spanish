//métodos de propiedad
const reproductor = {
  //objeto con una función dentro
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el ID: ${id}`);
  },
  pausar: function () {
    console.log('Pausa');
  },
  crearPlayLisst: function (name) {
    console.log(`Creando playlist ${name}`);
  },
};

console.log(reproductor);

reproductor.borrarCancion = function (id) {
  console.log(`Eliminando canción ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayLisst('heavy');
reproductor.reproducir('heavy');
