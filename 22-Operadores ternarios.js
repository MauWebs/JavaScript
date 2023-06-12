/* OPERADORES TERNARIOS */

// "Es un shortcut para if y else " //

// tiene 3 partes
// Coindicion ? verdadera : falsa



/*---< EJEMPLO A >---*/


/*---| FUNCION 1 |---*/

function funcion() {
    console.log(true == true ? "es true" : "es false")
};

funcion();

/*---| FUNCION 2 |---*/

function funcion_2() {
    console.log(false == true ? "es true" : "es false")
};

funcion_2();


/*---< EJEMPLO B >---*/

let edad = window.prompt("");

edad = Number(edad);

function laEdad(edad) {
    return edad <= 0 ? "no naciste" : edad >= 18 ? "Sos mayor" : "Sos menor";
};

console.log(laEdad(edad));