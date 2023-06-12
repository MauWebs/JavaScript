/* PARÁMETROS REST */

// Funcion que puede ser llamada 
// Con cualquier numero o argumento


function sumar(a, b) {
    return a + b
};

// Mostrar 2 numros sumados
console.log(sumar(1, 2));

//----------< VS >----------//

function sumarTodo(...argumentos) {

    let estado = 0;

    for (let argumento of argumentos) estado += argumento;

    return estado;

};

// Mostrar todos los numeros sumados
console.log(sumarTodo(1, 2, 3, 4, 5));