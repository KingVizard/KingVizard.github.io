

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getDatabase();
// const auth = getAuth(app);


let MainForma = document.getElementById('MainForm');

let SignIn = evt => {
  evt.preventDefault();

  let email = document.getElementById('emailInp').value;
  let password = document.getElementById('passwordInp').value;

  // console.log(email + "<-email");


  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      // const user = userCredential.user;
      // alert("Usuario existe");
      location.replace("index.html");
    })
    .catch(function () {
      const errorCode = error.code;
      const errorMessage = error.message;

      // console.log(userCredential);
      console.log(email + "<-email");
      console.log(password + "<-pass");


      alert(errorMessage);
    });
}

MainForma.addEventListener('submit', SignIn);

