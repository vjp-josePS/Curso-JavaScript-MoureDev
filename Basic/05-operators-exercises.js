// 1. Crea una variable para cada operación aritmética

console.log("1. Crea una variable para cada operación aritmética\n")

let suma = 4 + 5;
let resta = 4 - 5;
let multiplicacion = 4 * 5;
let division = 4 / 5;
let modulo = 4 % 5;
let exponente = 4 ** 5;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
console.log("Exponente: " + exponente);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas

console.log("\n2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas\n")

suma += 2;
resta -=2;
multiplicacion *= 2;
division /=2;
modulo %= 2;
exponente **= 2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
console.log("Exponente: " + exponente);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log("\n3. Imprime 5 comparaciones verdades con diferentes operadores de comparación\n")

console.log(5 > 3); // 5 es mayor que 3
console.log(5 < 10); //5 es menor que 10
console.log(5 <= 5); //5 es mayor o igual que 5
console.log(5 !=10); // 5 es distinto de 10
console.log(5 !== "5"); // 5 int es distinto de 5 string

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("\n4. Imprime 5 comparaciones falsas con diferentes operadores de comparación\n")

console.log (10 < 5); // 10 es menor que 5
console.log(5 > 10); // 5 es mayor que 10
console.log(5 >= 10); // 5 es mayor o igual que 10
console.log(5 == 10); // 5 es igual que 10
console.log(5 === "5"); // 5 número es igual que 5 string   

// 5. Utiliza el operador lógico and

console.log("\n5. Utiliza el operador lógico and\n");

console.log(5 < 10 && 15 > 10); // 5 es menor que 10 (true) y 15 es mayor que 10 (true)
console.log(5 > 10 && 15 > 10); // 5 es mayor que 10 (false) y 15 es mayor que 10 (true)

// 6. Utiliza el operador lógico or

console.log("\n6. Utiliza el operador lógico or\n")

console.log(5 > 10 || 10 > 5); // 5 es mayor que 10 (false) o 10 es mayor que 5 (true)
console.log(5 > 10 || 10 > 15); // 5 es mayor que 10 (false) o 10 es mayor que 15 (false)
console.log(5 < 10 || 10 < 15); // 5 es menor que 10 (true) o 10 es menor que 15 (true) 

// 7. Combina ambos operadores lógicos

console.log("\n7. Combina ambos operadores lógicos\n");

console.log(5 > 10 || 10 < 15 && 10 > 5); // 5 es mayor que 10 (false) o 10  es menor que 15 (true), si no se cumple eso pues comprobamos que 10 es mayor que 5 (true)
console.log(5 < 10 && 10 < 15 || 5 > 10); // 5 es menor que 10 (true) y 10 es menor que 15 (true), si no se cumple eso pues comprobamos que 5 es mayor que 10 (false)

// 8. Añade alguna negación

console.log("\n8. Añade alguna negación\n");

console.log(!(true)); // Negación de true
console.log(!(5 > 10)); // Negación de que 5 es mayor que 10

// 9. Utiliza el operador ternario

console.log("\n9. Utiliza el operador ternario\n");

const carnet = true;

carnet ? console.log("Jose se saca el carnet") : console.log("Jose no se saca el carnet");

// 10. Combina operadores aritméticos, de comparáción y lógicos

console.log("\n10. Combina operadores aritméticos, de comparáción y lógicos\n");

console.log(5 + 10 == 20 - 5); // 5 más 10 es igual que 20 más 5
console.log(10 + 5 == 15 - 5 || 20 - 10 == 5 + 5); // 10 más 5 es igual a 15 menos 5, y si no es asi, 20 menos 10 es igual que 5 más cinco
