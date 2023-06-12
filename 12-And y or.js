/* AND Y OR */

// ( AND = && ) todas las coindiciones se cumplen

// ( OR = ||) solo 1 coindicion debe cumplirse


//------------< && >------------//


let café = true;
let computadora = true;

switch (true) {

    case café && computadora == true:
        console.log("Es un exelente día para programar");
        break;

    case computadora == true:
        console.log("Es un día normal");
        break;

    case café == true:
        console.log("Tengo café, pero me falta la computadora");
        break;

    default:
        console.log("No puedo porgramar sin la computadora");
        break;

};


//------------< || >------------//


let humano = true;
let persona = false;

switch (true) {

    case humano || persona:
        console.log("Sos de [ESTE] planeta");
        break;

    default:
        console.log("Sos de [OTRO] planeta");
        break;

};

