/* OPERADOR SPREAD */

// Permite desempajar elementos de un array o string

/*------------------- NUMEROS -------------------*/

//---> EJEMPLO 1 <---//

// Variable con array de numeros
let numberos = [0, 1, 2, 3, 4];

// Mostrar en consola los numeros
console.log(numberos);

// Mostrar en consola los numeros [...DESEMPACADOS]
console.log(...numberos);

//---> EJEMPLO 2 <---//

// Dar numero más grande
let numeroMaximo = Math.max(...numberos) ;

// Mostrar en consola numero más grande [...DESEMPACADO]
console.log(numeroMaximo);

console.log("|--------------------|");

/*------------------- STRINGS -------------------*/

//---> EJEMPLO 1 <---//

// Variable
let nombre = "Mauricio";

// Mostrar en consola nombre [...DESEMPACADO]
console.log(...nombre);

//---> EJEMPLO 2 <---//

// Variable arrays
let comidas = ["chuleta", "chocolate", "huevos"];
let verduras = ["cebolla", "papa", "morron"];

// Comidas agregamos verduras [...DESEMPACADO]
comidas.push(...verduras);

// Mostramos comidas [...DESEMPACADO]
console.log(...comidas);