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
// const auth = firebase.auth();

coleccionProduccion = db.ref().child('produccion');

// var usuarioA = null;

// console.log('usuarioA: ' + usuarioA);
// 
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('usuario logeado pantalla registrar-produccion: ' + user.email);

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
        console.log('dentro de la funcion: '+usuario );
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

    // usuarioA = user.email;
  } else {
    location.replace("index.html");
  }

});




// -- VALORES A GUARDAR 

// asignando la hora actual como valor predeterminado
let inputHora = document.getElementById('hora');
let fechaHora = new Date();
let hora = fechaHora.getHours();
let minutos = fechaHora.getMinutes();
let horaActual = (hora < 10 ? "0" + hora : hora) + ":" + (minutos < 10 ? "0" + minutos : minutos);
inputHora.value = horaActual;

iconos
const iconoEditar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>';
const iconoEliminar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>';

function mostrarProduccion({ usuario, secador, turnos, hora, color, formato, contadorSQFT, sqftMeta, Cumplimiento, comentarios }) {
  return `
        <td>${usuario}</td>
        <td>${secador}</td>
        <td>${secador}</td>
        <td>${turnos}</td>
        <td>${hora}</td>
        <td>${color}</td>
        <td>${formato}</td>
        <td>${contadorSQFT}</td>
        <td>${sqftMeta}</td>
        <td>${Cumplimiento}</td>
        <td>${comentarios}</td>
        <td><button class="btnEditar btn btn-secondary" data-toogle="tooltip" title="Editar">${iconoEditar}</button> <button class="btnBorrar btn btn-danger" data-toogle="tooltip" title="Borrar">${iconoEliminar}</button></td>
        `
};