/*------------------ ARRAYS ------------------*/

// "Variable con muchos datos" //
let frutas = ["banana", "manzana", "naranja"];

// Mostrar (elemento 0, elemento 1, elemento 2); //
console.log(frutas[0], frutas[1], frutas[2]);

/*------------------ REASIGNAR ------------------*/

// Reasignar elemento
frutas[0] = "melon";

// Mostrar (elemento 0, elemento 1, elemento 2); //
console.log(frutas[0], frutas[1], frutas[2]);

/*------------------ AGREGAR [ULTIMO] ------------------*/

// Agregar elemento
frutas.push("coco");

// Mostrar (elemento 0, elemento 1, elemento 2, elemento 3); //
console.log(frutas[0], frutas[1], frutas[2], frutas[3]);

/*------------------ ELIMINAR [ULTIMO] ------------------*/

// Eliminar elemento
frutas.pop([3]);

// Mostrar frutas
console.log(frutas);

/*------------------ AGREGAR [PRIMERO] ------------------*/

// Agregar elemento
frutas.unshift("coco");

// Mostrar (elemento 0, elemento 1, elemento 2, elemento 3); //
console.log(frutas[0], frutas[1], frutas[2], frutas[3]);

/*------------------ ELIMINAR [PRIMERO] ------------------*/

// Agregar elemento
frutas.shift([0]);

// Mostrar frutas
console.log(frutas);

/*------------------ LENGTH [LONGITUD] ------------------*/

// Mostrar longitud de frutas
console.log(frutas.length);

/*------------------ MOSTRAR [INDEX] ------------------*/

// Mostrar index de melon
console.log(frutas.indexOf('melon'));

// Mostrar index de fruta o valor no existente = (-1)
console.log(frutas.indexOf('hola mundo')); 