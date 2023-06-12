/* PROMESAS ASÍNCRONAS */

// Json
const users = [
    {
        id: 0,
        name: "Mauricio"
    },
    {
        id: 1,
        name: "Agustin"
    },
];

// Dame los usuarios (Json)
const getUsers = () => {

    return new Promise((resolve) => {
        setTimeout(() => { resolve(users) }, 1500)
    });

};

// Mostrar en consola (Json)
getUsers().then((users) => console.log(users));


// Forma ASYNC (asíncrona)
async function fetchUsers() {
    const users = await getUsers();
    console.log(users);
};

// Llamamos a la funcion
fetchUsers();