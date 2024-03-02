$(document).ready(function() {
  const config = {
    apiKey: "AIzaSyAXoDvbYkbX1Y-VuZmEjBTXv1BywK40Lmo",
    authDomain: "testappwebestadias.firebaseapp.com",
    databaseURL: "https://testappwebestadias-default-rtdb.firebaseio.com",
    projectId: "testappwebestadias",
    storageBucket: "testappwebestadias.appspot.com",
    messagingSenderId: "361048886546",
    appId: "1:361048886546:web:fde40acd0deeaaf207b7cb",
    // measurementId: "G-FM5VLLCV3F"
  };

  firebase.initializeApp(config);

  var filaEliminada;
  var filaEditada;

  const iconoEditar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>';
  const iconoEliminar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>';

  var db = firebase.database();

  var coleccionProduccion = db.ref().child("produccion");

  var dataset = [];

  var table = $('#tablaProductos').DataTable({
    pageLength: 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
    data: dataset,
    columnDefs: [
      {
        targets: [0],
        visible: false,
      },
      {
        targets: -1,
        // defaultContent: "<div class='wrapper text-center'> <div class='btn-group'> <button class='btnEditar btn btn-primary data-toggle='tooltip' title='Editar'>" + iconoEditar + "</button> <button class='btnBorrar btn btn-danger' data-toggle='tooltip' title='Borrar'>" + iconoEliminar + "</button></div></div>"
        defaultContent: "<div class='wrapper text-center'><div class='btn-group'><button class='btnEditar btn btn-primary' data-toggle='tooltip' title='Editar'>" + iconoEditar + "</button><button class='btnBorrar btn btn-danger' data-toggle='tooltip' title='Borrar'>" + iconoEliminar + "</button></div></div>"

      }
    ]
  });





  // Realizar una consulta con la cláusula WHERE
  let fechaHora = new Date();
  let diaSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let mesAnyo = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  let fechaCompleta = `${diaSemana[fechaHora.getDay()]}, ${fechaHora.getDate()} ${mesAnyo[fechaHora.getMonth()]} ${fechaHora.getFullYear()}`;
var ref = firebase.database().ref("produccion");
ref
  .orderByChild("fecha")
  .equalTo(fechaCompleta)
  .on("child_added", function(snapshot) {

    dataset = [snapshot.key, snapshot.child("secador").val(), snapshot.child("turnos").val(), snapshot.child("hora").val(), snapshot.child("fecha").val(), snapshot.child("formato").val(), snapshot.child("color").val(),  snapshot.child("contadorSQFT").val(),  snapshot.child("sqftMeta").val(),  snapshot.child("Cumplimiento").val(),  snapshot.child("comentarios").val()];
    table.rows.add([dataset]).draw();
  });

  // CHILD_ADDED
  // coleccionProduccion.on('child_added', datos => {    
  //   dataset = [datos.key, datos.child("secador").val(), datos.child("turnos").val(), datos.child("hora").val(), datos.child("fecha").val(), datos.child("formato").val(), datos.child("color").val(),  datos.child("contadorSQFT").val(),  datos.child("sqftMeta").val(),  datos.child("Cumplimiento").val(),  datos.child("comentarios").val()];
  //   table.rows.add([dataset]).draw();
  // });

  //CHILD_CHANGED
  coleccionProduccion.on('child_changed', datos => {
    dataset = [datos.key, datos.child("secador").val(), datos.child("turnos").val(), datos.child("hora").val(), datos.child("fecha").val(), datos.child("formato").val(), datos.child("color").val(),  datos.child("contadorSQFT").val(),  datos.child("sqftMeta").val(),  datos.child("Cumplimiento").val(),  datos.child("comentarios").val()];
    table.row(filaEditada).data(dataset).draw();
  });

  //CHILD_removed
  coleccionProduccion.on('child_removed', function() {
    table.row(filaEliminada.parents('tr')).remove().draw();
  });


  // Form Alta / Edicion
  $('form').submit(function(e) {
    e.preventDefault();
    let id = $.trim($('#id').val());
    let secador = $.trim($('#listSecadores').val());
    let turnos = $.trim($('#listTurnos').val());
    let hora = $.trim($('#hora').val());
    let fecha = $.trim($('#fecha').val());
    let color = $.trim($('#color').val());
    let formato = $.trim($('#formato').val());
    let contadorSQFT = $.trim($('#contadorSQFT').val());
    let sqftMeta = $.trim($('#sqftMeta').val());
    // let Cumplimiento = $.trim($('#Cumplimiento').val());
    let Cumplimiento = ((contadorSQFT / sqftMeta) * 100).toFixed(2) + '%';
    // let Cumplimiento = (contadorSQFT / sqftMeta) * 100 + '%';

    let comentarios = $.trim($('#comentarios').val());

    let idFirebase = id;
    if (idFirebase == '') {
      idFirebase = coleccionProduccion.push().key;
    };

    data = { secador: secador, turnos: turnos, hora : hora, fecha : fecha, color : color, formato : formato, contadorSQFT : contadorSQFT, sqftMeta : sqftMeta, Cumplimiento : Cumplimiento, comentarios : comentarios };

    actualizacionData = {};

    actualizacionData[`/${idFirebase}`] = data;

    coleccionProduccion.update(actualizacionData);
    id = '';
    $('form').trigger('reset');
    $('#modalAltaEdicion').modal('hide');
  });


  $('#tablaProductos').on('click', '.btnEditar', function() {
    filaEditada = table.row($(this).parents('tr'));
    let fila = $('#tablaProductos').dataTable().fnGetData($(this).closest('tr'));
    let id = fila[0];
    let secador = $(this).closest('tr').find('td:eq(0)').text();
    let turnos = $(this).closest('tr').find('td:eq(1)').text();
    let hora = $(this).closest('tr').find('td:eq(2)').text();
    // 
    let fecha = $(this).closest('tr').find('td:eq(3)').text();
    let color = $(this).closest('tr').find('td:eq(5)').text();
    let contadorSQFT = $(this).closest('tr').find('td:eq(6)').text();
    let sqftMeta = $(this).closest('tr').find('td:eq(7)').text();
    // let Cumplimiento = $(this).closest('tr').find('td:eq(8)').text();
    let formato = $(this).closest('tr').find('td:eq(4)').text();
    let comentarios = $(this).closest('tr').find('td:eq(9)').text();

    $('#id').val(id);
    $('#listSecadores').val(secador);
    $('#listTurnos').val(turnos);
    $('#hora').val(hora);
    // 
    $('#fecha').val(fecha);
    $('#color').val(color);
    $('#contadorSQFT').val(contadorSQFT);
    $('#sqftMeta').val(sqftMeta);
    // $('#Cumplimiento').val(Cumplimiento);
    $('#formato').val(formato);
    $('#comentarios').val(comentarios);
    // 
    $('#modalAltaEdicion').modal('show');
  });

  $('#tablaProductos').on('click', '.btnBorrar', function() {
    filaEliminada = $(this);
    Swal.fire({
      title: '¿Está seguro de eliminar el producto?',
      text: '¡Está operacion no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonColor: 'Borrar'
    }).then((result) => {
      if (result.value) {

        let fila = $('#tablaProductos').dataTable().fnGetData($(this).closest('tr'));

        let id = fila[0];
        db.ref(`produccion/${id}`).remove()
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success')
      }
    })
  });

});