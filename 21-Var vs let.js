/* --------< SCOPE DE LAS VARIABLES >-------- */

/* "desde donde la variable se puede acceder" */


//--> VAR = Esta limitada a una fucion "() y {}" <--//

if (true) {
    var variableVar = "variable Var";
};
// fuera
console.log(variableVar);


//--> LET = Esta limitada al bloque del scope "{}" <--//

if (true) {
    let variableLet = "Variable Let";
    // dentro
    console.log(variableLet);
};



//--> VAR en una funcion <--//

function funcionVar() {
    var hola = "Hola";
};

// ¡ERROR! //
console.log(hola);