/* ARRAY.MAP() */

// Crear un nuevo array llamado a una funcion

// Array de numeros
const numeros = [0, 1, 2, 3, 4, 5];

// Funcion ( valor * 2 )
function funcion(valor) {
    return valor * 2;
};

// Mapear los numeros
const numerosMap = numeros.map(funcion);

// Mostrar en consola [...DESEMPACADO]
console.log(...numerosMap);