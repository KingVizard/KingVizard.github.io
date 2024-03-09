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

  
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('usuario logeado pantalla menu: ' + user.email);
    //   location.replace("menu.html");
    } else {
      location.replace("index.html");
    }
  });