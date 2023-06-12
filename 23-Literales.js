/* PLANTILLAS LITERALES */


// utilizar "", '' y `` es lo mismo
const nombre = "Mauricio";
const apellido = 'Vidal';
const edad = `20`;


// utilizar `` no lo es en este caso 
console.log(`Mi nombre es ${nombre} y mi appellido es ${apellido}`);
console.log(`Tengo ${edad} años`)


/*----< PRÁCTICA >----*/

let nombreUsuario = window.prompt("Ingresa tu nombre");

let edadUsuario = window.prompt("Ingresa tu edad");
edadUsuario = Number(edadUsuario);

console.log(`Tu nombre es ${nombreUsuario} y tenes ${edadUsuario} años`);