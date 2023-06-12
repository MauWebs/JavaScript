/* Sirve para escribir codigo 1 sola vez y ser llamado */

//------------< EJEMPLO (Simple) >------------//

function Funcion() {
    console.log("Soy un programador!");
};

Funcion();
Funcion();
Funcion();
Funcion();
Funcion();
Funcion();
Funcion();
Funcion();
Funcion();

//------------< EJEMPLO 2 >------------//

function iniciarFuncion() {
    let hola = "Hola";
    let mundo = "Javascript";
    saludar(hola, mundo);
};

function saludar(hola, mundo) {
    console.log(hola);
    console.log(mundo);
};

iniciarFuncion();