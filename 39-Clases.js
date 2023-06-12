/* CLASES */

// Son templates para los objetos
 
class users {

    // Definir los campos 
    constructor(nombre, apellido, fechaNacimiento) {

        this.nombre = nombre,
        this.apellido = apellido,
        this.fechaNacimiento = fechaNacimiento

    };

    // Calcula el año actual - tu año de nacimiento
    edad() {
        let date = new Date();
        return date.getFullYear() - this.fechaNacimiento;
    };
    // Ejemplo: año actual - 2002;

};

// Asiganar valores de "user" proveniente de "users"
let user = new users("Mauricio", "Vidal", 2002);

// mostrar nombre, apellido y edad actual
console.log(user.nombre, user.apellido, "-", user.edad(), "años");