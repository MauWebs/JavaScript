/* FOR EACH */

// Llama a una funcion por cada elemento del array

// array de numeros
const numeros = [0, 1, 2, 3, 4];

// variable string vacío
let texto = "";

// Valor del texto
function miFuncion(valor) {
    texto += valor + "<br/>"
};

// Recorremos cada elemento del array en "numeros"
// Lo aplicamos a "miFuncion" como (valor)
numeros.forEach(miFuncion);

// Mostrar en id="test" el valor de texto
document.getElementById("test").innerHTML = texto;
