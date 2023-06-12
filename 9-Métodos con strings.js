/* Métodos con Stings */

let nombre = 'Mauricio';

// Cantidad
console.log(nombre.length);


// Index pasa a letra
console.log(nombre.charAt(0));


// Letra pasa a Index
console.log(nombre.indexOf('M'));


// UpperCase
console.log(nombre.toUpperCase());


// LowerCase
console.log(nombre.toLowerCase());


// Remplazar
console.log(nombre.replaceAll('M', 'A'));

console.log("|-------Métodos-------|");

//---< Slicing >---//

let nombreCompleto = "Mauricio Vidal";

let miNombre;
let miApellido;

miNombre = nombreCompleto.slice(0, 8);
miApellido = nombreCompleto.slice(9, 14);

console.log(miNombre);
console.log(miApellido);

console.log("|-------Slicing-------|");
