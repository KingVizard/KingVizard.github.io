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

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

let MainForma = document.getElementById('MainForm');

auth.onAuthStateChanged((user) => {
  if (user) {
    location.replace("menu.html");
  } else {
  }
});

let SignIn = evt => {
  evt.preventDefault();

  let email = document.getElementById('emailInp').value;
  let password = document.getElementById('passwordInp').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      location.replace("menu.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/invalid-email') {
        Swal.fire('El correo electrónico ingresado no es válido', '', 'error');
      } else if (errorCode === 'auth/wrong-password') {
        Swal.fire('La contraseña ingresada es incorrecta', '', 'error');
      } else if (errorCode === 'auth/user-not-found') {
        Swal.fire('Usuario no encontrado', '', 'error');
      }
      else {
        Swal.fire('Ocurrió un error durante el inicio de sesión', '', 'error');
      }
    });
}

MainForma.addEventListener('submit', SignIn);

