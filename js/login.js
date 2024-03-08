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

let SignIn = evt => {
  evt.preventDefault();

  let email = document.getElementById('emailInp').value;
  let password = document.getElementById('passwordInp').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      location.replace("menu.html");
    })
      .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire('!Ocurrio un error!', errorMessage, 'error');       
      
      
  //     firebase.auth().signInWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Inicio de sesión exitoso
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   // Error durante el inicio de sesión
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // Personaliza los mensajes de error según el código de error
  //   if (errorCode === 'auth/invalid-email') {
  //     // Mensaje de error para correo electrónico inválido
  //     console.log('El correo electrónico ingresado no es válido');
  //   } else if (errorCode === 'auth/wrong-password') {
  //     // Mensaje de error para contraseña incorrecta
  //     console.log('La contraseña ingresada es incorrecta');
  //   } else {
  //     // Mensaje de error genérico
  //     console.log('Ocurrió un error durante el inicio de sesión');
  //   }
  // });



    });
}

MainForma.addEventListener('submit', SignIn);

