/*
Archivo para variables que utilizará mi videojuego
*/

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

let frames = 0;

const gravity = 0.1;

//Arrey pipes

let pipes = [];


//Points
let points = 0;
let diff = 1;
let requestID; //detener el videojuego cuando el flappy choque con cualquier cosa

//Audio
const audio = new Audio()
//audio.src=""









//Ejemplo: valores para el heroe por defecto cuando inicia el videojuego

let dylan = {
    vida: 3,
    status: "pequeño",  //pequeño,grande,rojo, special(estrella)
    monedas: 0,

}