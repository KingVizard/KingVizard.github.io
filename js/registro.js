// -- SDK FIREBASE  
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
const auth = firebase.auth();
const db = firebase.database();

let MainForma = document.getElementById('MainForm');

// VALIDACIONES

// BOTON
let RegisterUser = evt => {
    evt.preventDefault();

    let email = document.getElementById('emailInp').value;
    let password = document.getElementById('passwordInp').value;
    let name = document.getElementById('nameInp').value;
    let secador = document.getElementById('secadorInp').value;
    let turno = document.getElementById('turnoInp').value;

    
    if (validar_email(email) == false || validar_pass(password) == false) {
        Swal.fire('!Advertencia!', 'Correo y/o Contraseña incorrecto', 'warning');
        return
    }
    validar_campo(name);
    
    if (validar_campo(name) == false || validar_campo(secador) == false || validar_campo(turno) == false) {
        Swal.fire('!Advertencia!', 'Uno o varios campos estan vacios', 'warning');
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {

            // DECLARAR VARIABLE USUARIO
            let user = auth.currentUser
            
            // AGREGAR USUARIO A LA BD
            let database_ref = db.ref();
            // let coleccionUsers;
            
            // CREAR LA INFORMACION DEL USUARIO
            var user_data = {
                email: email,
                name: name,
                secador: secador,
                turno: turno,
                last_login: Date.now()
            }
            
            database_ref.child('users/' + user.uid).set(user_data);

          Swal.fire('!Registrado!', 'Usuario registrado correctamente', 'success');            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Swal.fire('!Error!', errorMessage, 'error')

        });

    }

MainForma.addEventListener('submit', RegisterUser);



function validar_email(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true;
    } else {
        return false;
    }
}

function validar_pass(password) {
    if (password <= 6) {
        return false;
    } else {
        return true;
    }
}

function validar_campo(field) {
    if (field == null) {
        return false;
    }
    alert('campos: ' + field);
    if (field.length <= 10) {
        return false;
    }
     else {
        return true;
    }

}

