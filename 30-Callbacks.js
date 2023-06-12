/* CALLBACKS */

// Una funcion pasada como argumento a otra funcion

// Suma a + b
function sumar(a, b) {
    let resultado = a + b;
    return resultado;
};

// Numeros a sumar
let total = sumar(5, 5);

// Muestra en consola
function enConsola(mostrar) {
    console.log(mostrar);
};

// Muestra en Alerta
function enAlerta(mostrar) {
    window.alert(mostrar);
};

enConsola(total);

enAlerta(total);

//--------------------< VS >--------------------//

// Suma a + b y callback
function sumar_2(a, b, callback) {
    let resultado_2 = a + b;
    callback(resultado_2);
};

// Numeros a sumar
sumar_2(5, 5, enConsola_2);

// Muestra en consola
function enConsola_2(mostrar) {
    console.log(mostrar);
};

// Muestra en Alerta
function enAlerta_2(mostrar) {
    window.alert(mostrar);
};