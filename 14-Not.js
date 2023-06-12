/* Operador (NOT = !) */

// Convierte el valor actual a su valor opuesto //

// true -> false;
// false -> true;


//---< EJEMPLO (1) >---//

let edad = 20;

if (!(edad > 18)) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
};

//---< EJEMPLO (2) >---//

let es_admin = true;

if (!es_admin) {
    console.log("Es admin");
} else {
    console.log("NO es admin");
};
