/* Tipos de datos */

// -< String >- //

let color = "amarillo";

console.log(color);

console.log(typeof (color));

console.log("|----------------|");

// -< Number >- //

let numero = 20;

console.log(numero);

console.log(typeof (numero));

console.log("|----------------|");

// -< Boolean >- //

//true
let verdadero = true;

console.log(verdadero);

console.log(typeof (verdadero));

//false
let falso = false;

console.log(falso);

console.log(typeof (falso));

console.log("|----------------|");

// -< BigInt >- //

let numberBig = 9999999999999999n;

console.log(numberBig);

console.log(typeof (numberBig));

console.log("|----------------|");

// -< Undefined >- //

let noDefinido;

console.log(noDefinido);

console.log(typeof (noDefinido));

console.log("|----------------|");

// -< Null >- //

let noExiste = null;

console.log(noExiste);

console.log(typeof (noExiste));

console.log("|----------------|");

// -< Symbol >- //

let s1 = Symbol('Hola');

let s2 = Symbol('Hola');

console.log(s1);

console.log(typeof (s1));

console.log(s1 == s2);

console.log("|----------------|");

// -< Object >- //

let persona = { name: "Mauricio", edad: "20" }; 

console.log(persona);

console.log(typeof(persona));

console.log("|----------------|");
