/* ARRAY REDUCE */

// Corre una funcion por cada elemento
// Para volverlo un solo valor

// Array de numeros
const numeros = [0, 1, 2, 3, 4, 5];

// Sumar Numeros
function miFuncion(actual, numero) {
  return actual + numero;
};

// Aplicar la función a cada elemento del array
const resultado = numeros.reduce(miFuncion);

// Mostrar en consola
console.log(resultado);