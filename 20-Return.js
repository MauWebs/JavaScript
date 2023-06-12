/* ------------------< RETURN >------------------ */

/* Devuelve un valor donde llamamos a la funcion */

let edad = window.prompt("Ingresa tu edad");

edad = Number(edad);

function checkEdad(edad) {

    switch (true) {

        case edad <= 0 || edad == null:
            return ("No naciste");

        case edad < 18:
            return ("Sos menor de edad");

        case edad >= 18:
            return ("Sos mayor de edad");

        default:
            return ("Ingresa tu edad");

    };

};

console.log(checkEdad(edad));