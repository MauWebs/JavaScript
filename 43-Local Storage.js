/* LOCAL STORAGE */

//------------< Crear >------------//

localStorage.setItem("username", "Mauricio");

console.log(localStorage.getItem("username"));

//------------< Eliminar >------------//

localStorage.setItem("username_2", "Agustin");

localStorage.removeItem("username_2");

console.log(localStorage.getItem("username_2"));

//------------< Eliminar Todo >------------//

// Elimina todo el LOCAL STORAGE
localStorage.clear();