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
      location.replace("index.html");
    })
    .catch(function () {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

MainForma.addEventListener('submit', SignIn);

