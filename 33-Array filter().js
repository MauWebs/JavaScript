/* ARRAY.FILTER() */

// Crea un nuevo array cada elemento que pasa un test

// Array de numeros
const numeros = [0, 11, 22, 33, 44, 55];

// Mostrar los numeros SIN filtrar
console.log(numeros);

// funcion = valor es mayor a 18 ?   
function miFuncion(valor) {
    return valor > 18;
};

// Filtrar con la funcion "funcion"
const filtrar = numeros.filter(miFuncion);

// Mostrar los numeros filtrados
console.log(filtrar);
