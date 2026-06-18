// Operadores

// Operadores aritméticos

let a = 5;
let b = 10;

console.log("~Operadores aritméticos~");

console.log("Valor de a: " + a + " y valor de b: " + b);

console.log("Suma: " + (a + b)); // Suma
console.log("Resta: " + (a + b)); // Resta
console.log("Multiplicación: " + (a* b)); // Multiplicación
console.log("División: " + (a/ b)); // División

console.log("Módulo: " + (a % b)); // Módulo
console.log("Exponenciación: " + (a ** b)); // Exponente

a++; // Incremento
console.log("Incremento: " + (a));

a--; // Decremento
console.log("Decremento: " + (a));

// Operadores de asignación

console.log("\n~Operadores de asignación~");

let myVariable = 2;
console.log("Valor inicial de la variable: " + myVariable);

myVariable += 2;
console.log("Incremento: " + myVariable);

myVariable -= 2;
console.log("Decremento: " + myVariable);

myVariable *= 2;
console.log("Multiplicación: " + myVariable);

myVariable /= 2;
console.log("División: " + myVariable);

myVariable %= 2;
console.log("Módulo: " + myVariable);

myVariable **= 2;
console.log("Exponente: " + myVariable);

// Operadores de comparación

console.log("\n~Operadores de comparación~");

console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que

console.log(a == b); // Igual que
console.log(a == 5); // Igualdad por valor
console.log(a == "5"); // Igualdad por valor

console.log(a === a); // Igualdad por valor y tipo
console.log(a === 5); // Igualdad por valor y tipo
console.log(a === "5"); // Igualdad por valor y tipo

console.log(a != 5); // Diferente que
console.log(a !== "5"); // Diferente por valor y tipo

// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// Todos los boolean

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

console.log("\n~Operadores lógicos~");

// and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 && 15 > 20 || 30 < 40); // Esta sale true porque el último operador al ser or se cumple, ya que en esta operación solo se necesita que una de las condiciones sea verdadera para que toda la operación sea verdadera

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Operadores ternarios

console.log("\n~Operadores ternarios~");

const isRaining = false;

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");   