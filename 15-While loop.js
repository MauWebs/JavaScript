/* Un ciclo que se repite hasta que se cumpla (X) coindicion */


// Cantidad vacía
let cantidad = "";


// Ingresa un numero
while (cantidad == "" || cantidad == null) {
    cantidad = window.prompt("Ingresa la cantidad de productos");
};


// Convierte a numero
cantidad = Number(cantidad);


// Coindicional
switch (true) {

    case cantidad < 0:
        console.log("ingrese una cantidad positiva");
        break;

    case cantidad == 0:
        console.log("No lleva ningun producto");
        break;

    case cantidad == 1:
        console.log("lleva", cantidad, "producto");
        break;

    case cantidad > 1:
        console.log("lleva", cantidad, "productos");
        break;

    default:
        console.log("Ingresa la cantidad de productos");
        break;

};


// ¡Coindicion Infinita! //

// true == true;
// while (true == true) {
//     console.log("Esto es verdadero");
// };