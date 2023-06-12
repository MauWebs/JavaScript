/* OBJECTS */

// Variable con "valores" //

const users = [
    {
        id: 0,
        name: "Mauricio Vidal",
        age: 20,
        admin: true
    },
    {
        id: 1,
        name: "Agustin Vidal",
        age: 15,
        admin: false
    },
];

console.log(users);

// Acceder a cada propiedad por ejemplo "name"
console.log(users[0].name);
console.log(users[1].name);

console.log("|--------------------|");

// Acceder a todos los "name" con forEach
users.forEach(function (user) {
    console.log(user.name);
});