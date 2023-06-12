/* ARRAYS 2D */

// Array que esta dentro de otro array

// ejemplo:

// Son 3 arrays
let frutas = ["pera", "manzana", "banana"];
let verduras = ["cebolla", "papa", "morron"];
let carnes = ["bife", "pollo", "pescado"];

// En 1 array
let comidas = [frutas, verduras, carnes];


/*------------------ REMPLAZAR ------------------*/

// Remplaza frutas[0] elemento[0].
comidas[0][0] = "naranja";

// Remplaza verduras[1] elemento[1].
comidas[1][1] = "lechuga";

// Remplaza verduras[1] elemento[0].
comidas[2][0] = "chuleta";

/*-------------- MUESTRA ELEMENTO --------------*/
// Arrays
for (let lista of comidas) {

    // Elementos del array
    for (let comida of lista) {
        console.log(comida);
    };

};