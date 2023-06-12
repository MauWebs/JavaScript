/* JSON */

// Javascript Object Notation

// Ejemplo de JSON

let users = [
    {
        firstName: "Mauricio",
        lastName: "Vidal",
        age: 20,
        tasks: [
            {
                title: "Tarea 1"
            },
            {
                title: "Tarea 2"
            },
            {
                title: "Tarea 3"
            }
        ]
    },
    {
        firstName: "Agustin",
        lastName: "Vidal",
        age: 15,
        tasks: [
            {
                title: "Tarea 1"
            },
            {
                title: "Tarea 2"
            },
            {
                title: "Tarea 3"
            }
        ]
    }
];

console.log(users);

console.log("|----------------|");

// Variable "jsonStringify" de JSON --> cadena de texto
const jsonStringify = JSON.stringify(users);
console.log(jsonStringify);

console.log("|----------------|");

// Variable "objectsParse" cadena de texto --> JSON
const objectsParse = JSON.parse(jsonStringify);
console.log(objectsParse);

console.log("|----------------|");

// Mostrar el nombre con indice [0]
console.log(objectsParse[0].firstName);

console.log("|----------------|");
console.log("\n");

// Para mostrar todos los nombres1
objectsParse.forEach(user => {
    console.log("|>", user.firstName, "<|");
    user.tasks.forEach(task => console.log(task.title));
    console.log("\n");
});