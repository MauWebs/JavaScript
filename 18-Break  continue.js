console.log("|-------- BREAK --------|");

/* BREAK: termina el loop */
for (
    let contador = 0;
    contador <= 10;
    contador += 1) {
    if (contador == 5) {
        break;
    };
    console.log(contador);
};

console.log("|-------- CONTINUE --------|");

/* CONTINUE: salta una vuelta del bucle */
for (
    let contador = 0; 
    contador <= 10; 
    contador += 1) {
    if (contador == 5) {
        continue;
    };
    console.log(contador);
};