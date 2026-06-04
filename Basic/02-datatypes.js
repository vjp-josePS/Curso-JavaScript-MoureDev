// Tipos de datos primitivos

// cadena de texto (String)

let myName = "Jose Padilla";
let alias = 'JosePi';
let email = 'joselillopasa08@gmail.com';

// Numeros (number)

let age = 23; // num entero
let altura = 1.84; // num decimal

// Booleanos (boolean)

let isStudent = true;
let isTeacher = false;

// Undefined 

let undefinedVariable;
console.log(undefinedVariable);

// Null
let nullValue = null;

// Symbol
let mySymbol = Symbol("mySymbol");

// BigInt
let myBigInt = BigInt(1234567890123456789012345678901234567890);
let myBigInt2 = 1234567890123456789012345678901234567890n; // Otra forma de declarar un BigInt

// Mostramos los tipos de datos
console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof altura);

console.log(typeof isStudent);
console.log(typeof isTeacher);

console.log(typeof undefinedVariable);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);
