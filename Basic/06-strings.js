// Strings

// Concatenación
let myName =  "Jose";
let greeting = "Hola, " + myName + "!";

console.log(greeting);

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Jose"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("asdf"))
console.log(greeting.includes("Jose"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("asdf"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Jose", "Juan"))

// Template literals (plantillas literales)
let message  =`Hola, este
es mi
curso de
JavaScript`;

console.log(message);

let email = "joselillopasa08@gmail,com";

console.log(`Hola, ${myName} mi correo electrónico es ${email}`);