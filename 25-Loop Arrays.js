/* LOOP EN ARRAYS */

// Array con datos
let datos = [5, false, "hola", 10];

console.log("|----------------|");

/* ---> FORMA DIFÍCIL <--- */

// Es un loop con un valor de (i = 0).
// Si i es menor a la longitud de datos.
// Sumale 1 a i.
// Mostra en consola i.

for (
    let i = 0;
    i < datos.length;
    i += 1) {
    console.log(datos[i]);
};

console.log("|----------------|");

/* ---> FORMA FÁCIL <--- */

// Mostrar "dato" en datos
for (let dato in datos) {
    console.log(datos[dato]);
};

console.log("|----------------|");

// Mostrar el index de "dato" en datos
for (let dato in datos) {
    console.log(dato);
};