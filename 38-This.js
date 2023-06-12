/* THIS */

// Llama a un elemento dentro del objeto

// Objeto + una funcion "nombreCompleto"
const user = {
    nombre: "Mauricio",
    apellido: "Vidal",
    edad: "20",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

// Muestra el nombre completo y la edad
console.log
    (
        "Tu nombre es",
        user.nombreCompleto(),
        "y tenes",
        `${user.edad}`,
        "años"
    );

