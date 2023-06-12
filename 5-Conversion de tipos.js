/* Datos de un valor a otro valor */

/* Boolean, Number, String, etc... */

//-----------------< Ejemplo >-----------------//

let number = window.prompt("Ingresa un numero");

// String && no plus
console.log(number);
console.log(typeof(number));

// Convert
let convertNumber = Number(number);

// +1
let plusNumber = convertNumber += 1;

// Number && plus
console.log(plusNumber);
console.log(typeof(plusNumber));

console.log("|----------------|");

//-----------------< Ejemplo >-----------------//

let a;
let b;
let c;

// "5"
a = Number("5");
console.log(a, typeof a);

// 5
b = String(5);
console.log(b, typeof b);

// 0
c = Boolean(0);
console.log(c, typeof c);

// 1
c = Boolean(1);
console.log(c, typeof c);