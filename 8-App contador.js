/* App Contador */

let state = 0;


//--- Más (+) ---//
document.getElementById('sumar').onclick = function () {
    state += 1;
    //nuevo estado
    document.getElementById('contador').innerHTML = state;
};


//--- Menos (-) ---//
document.getElementById('restar').onclick = function () {
    state -= 1;
    //nuevo estado
    document.getElementById('contador').innerHTML = state;
};


//--- Volver a (0) ---//
document.getElementById('resetear').onclick = function () {
    state = 0;
    //nuevo estado
    document.getElementById('contador').innerHTML = state;
};