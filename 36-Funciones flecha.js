/* FUNCIONES FLECHA */

// Sirve para escribir funciones más simples


// Normal

function normal() {
  return "Hola funcion!";
};

console.log(normal());

// Flecha

const flecha = () => "Hola flecha!";

console.log(flecha());

// Flecha con parametros

let valor = "Mundo!";

const flechaParametros = (valor) => "Hola " + valor;

console.log(flechaParametros(valor));