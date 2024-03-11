const firebaseConfig = {
  apiKey: "AIzaSyAXoDvbYkbX1Y-VuZmEjBTXv1BywK40Lmo",
  authDomain: "testappwebestadias.firebaseapp.com",
  databaseURL: "https://testappwebestadias-default-rtdb.firebaseio.com",
  projectId: "testappwebestadias",
  storageBucket: "testappwebestadias.appspot.com",
  messagingSenderId: "361048886546",
  appId: "1:361048886546:web:fde40acd0deeaaf207b7cb",
  measurementId: "G-FM5VLLCV3F"
};

// -- INICIALIZANDO LA BD
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

coleccionProduccion = db.ref().child('produccion');

auth.onAuthStateChanged((user) => {
  if (user) {

    // -- VALORES A GUARDAR 
    $('form').submit(function (e) {
      e.preventDefault();
      let fechaHora = new Date();
      let diaSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
      let mesAnyo = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      let id = $('#id').val();
      let usuario = user.email;
      let secador = $('#listSecadores').val();
      let turnos = $('#listTurnos').val();
      let hora = $('#hora').val();
      let fechaCompleta = `${diaSemana[fechaHora.getDay()]}, ${fechaHora.getDate()} ${mesAnyo[fechaHora.getMonth()]} ${fechaHora.getFullYear()}`;
      let color = $('#color').val();
      let formato = $('#formato').val();
      let contadorSQFT = $('#contadorSQFT').val();
      let sqftMeta = $('#sqftMeta').val(); //SQFT REQ
      let Cumplimiento = ((contadorSQFT / sqftMeta) * 100).toFixed(2) + '%';
      let comentarios = $('#comentarios').val();
      console.log('dentro de la funcion: ' + usuario);
      let idFirebase = id;
      if (idFirebase == '') {
        idFirebase = coleccionProduccion.push().key;
      };

      data = { usuario: usuario, secador: secador, turnos: turnos, hora: hora, fecha: fechaCompleta, color: color, formato: formato, contadorSQFT: contadorSQFT, sqftMeta: sqftMeta, Cumplimiento: Cumplimiento, comentarios: comentarios };

      actualizacionData = {};
      actualizacionData[`/${idFirebase}`] = data;
      coleccionProduccion.update(actualizacionData);
      id = '';

      Swal.fire('!Se registro correctamente!', '', 'success');

      let inputHora = document.getElementById('hora');
      let hora_ = fechaHora.getHours();
      let minutos = fechaHora.getMinutes();
      let horaActual = (hora < 10 ? "0" + hora : hora) + ":" + (minutos < 10 ? "0" + minutos : minutos);

      $('form').trigger('reset');
      inputHora.value = horaActual;

    });
  } else {
    location.replace("index.html");
  }

});

// asignando la hora actual como valor predeterminado
let inputHora = document.getElementById('hora');
let fechaHora = new Date();
let hora = fechaHora.getHours();
let minutos = fechaHora.getMinutes();
let horaActual = (hora < 10 ? "0" + hora : hora) + ":" + (minutos < 10 ? "0" + minutos : minutos);
inputHora.value = horaActual;