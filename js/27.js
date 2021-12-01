const button = document.querySelector('#button');

button.addEventListener('click', function () {
  Notification.requestPermission().then((resultado) =>
    console.log(`resultado es: ${resultado}`)
  );
});

//btn que permite o deniega mostrar notificaciones

if (Notification.permission === 'granted') {
  new Notification('esta es una notificación', {
    icon: 'img/pixel.png',
    body: 'notificación permitida',
  });
}
