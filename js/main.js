// import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// // import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
// import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-functions.js"

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





fechayHora = new Date();

console.log(fechayHora)
console.log(fechayHora.getDate())
console.log(fechayHora.getMonth())
console.log(fechayHora.getFullYear())
console.log(fechayHora.getDay())


console.log(fechayHora.toISOString().split("T")[0]);



let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diaSemana[fechayHora.getDay()]);
// let diaSemana_ = diaSemana[fechayHora.getDay()];

let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesAnyo[fechayHora.getMonth()]);

console.log(fechayHora.getFullYear())

console.log(`${diaSemana[fechayHora.getDay()]}, ${fechayHora.getDate()} de ${mesAnyo[fechayHora.getMonth()]} de ${fechayHora.getFullYear()}`);
console.log(`${fechayHora.getDate()} de ${mesAnyo[fechayHora.getMonth()]} de ${fechayHora.getFullYear()}`);