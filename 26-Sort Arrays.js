/* SORT EN ARRAYS */

// "Ordena un array de strings" //

// Array con nombres.
let nombres = ["Mauricio", "Agustin", "Juan"];

// Ordenar por orden alfabético.
nombres = nombres.sort();

// Mostar cada uno por consola.
for (const nombre in nombres) {
    console.log(nombres[nombre]);
};

console.log("|----------------|");

// Ordenar por orden alfabético pero al revés
nombres = nombres.sort().reverse();

// Mostar cada uno por consola.
for (const nombre in nombres) {
    console.log(nombres[nombre]);
};
