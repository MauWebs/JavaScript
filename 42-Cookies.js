/* COOKIES */

//------------< Crear >------------//

document.cookie = "username=Mau Webs; expires=Thu, 1 Jan 2024 12:00:00 UTC; path=/";

let cookieCreate = document.cookie;

console.log(cookieCreate);

//------------< Eliminar >------------//

document.cookie = "username=Mauricio Vidal; expires=Thu, 1 Jan 2002 12:00:00 UTC; path=/";

let cookieDelete = document.cookie;

console.log(cookieDelete);