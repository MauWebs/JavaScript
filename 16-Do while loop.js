/*-----------------< DO WHILE LOOP >-----------------*/

// "es una manera diferente de escribir while loops" //

// 1- Hace algo
// 2- Verifica la coindicion
// 3- Repite si esta es verdadera


// Cantidad vacía
let cantidad;


// Ingresa un numero
do {
    cantidad = window.prompt("Ingresa la cantidad de productos");
} while (cantidad == "" || cantidad == null);


// Convierte a numero
cantidad = Number(cantidad);

// Muestra la cantidad
console.log("hay", cantidad, "producto/s");