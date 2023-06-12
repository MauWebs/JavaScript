/* LOCAL STORAGE + JSON */

user = [
    {
        id: "0",
        username: "Mauricio Vidal"
    },
    {
        id: "1",
        username: "Agustin Vidal"
    },
];

// Almacenar en el Local Storage
localStorage.setItem("users", JSON.stringify(user));

// Extrae del Local Storage
const storeUsers = JSON.parse(localStorage.getItem("users"));

// Mostrar en consola
console.log(storeUsers);