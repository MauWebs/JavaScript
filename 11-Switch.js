/* Switch sirve para usar muchos casos */

let edad = window.prompt("ingresa tu edad");
edad = Number(edad);

switch (true) {

    case edad == 0 || edad < 0:
        console.log("no naciste");
        break;

    case edad <= 12:
        console.log("sos niño");
        break;

    case edad <= 19:
        console.log("sos adolecente");
        break;

    case edad <= 59:
        console.log("sos adulto");
        break;

    case edad >= 60:
        console.log("sos anciano");
        break;

    default:
        console.log("tienes que poner tu edad");
        break;

};