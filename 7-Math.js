/* Matemáticas */

let number = 8.50;
let number2 = 8.40;

//--------------< round >--------------//

let round = Math.round(number);
let round2 = Math.round(number2);

console.log("igual o mayor a 5:", round);
console.log("menor a 5:", round2);

console.log("|----------round----------|");

//--------------< floor >--------------//

let floor = Math.floor(number);
let floor2 = Math.floor(number2);

console.log("redondea para abajo:", floor);
console.log("redondea para abajo:", floor2);

console.log("|----------floor----------|");

//--------------< ceil >--------------//

let ceil = Math.ceil(number);
let ceil2 = Math.ceil(number2);

console.log("redondea para arriba:", ceil);
console.log("redondea para arriba:", ceil2);

console.log("|----------ceil----------|");

//--------------< pow >--------------//

let pow = Math.pow(number, 2);
let pow2 = Math.pow(number2, 2);

console.log("exponenete de 2:", pow);
console.log("exponenete de 2:", pow2);

console.log("|----------pow----------|");

