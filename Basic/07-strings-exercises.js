// 1. Concatena dos cadenas de texto

console.log("1. Concatena dos cadenas de texto\n")

let hola = "Hola"
let mundo = hola + " mundo!"

console.log(mundo)

// 2. Muestra la longitud de una cadena de texto

console.log("\n2. Muestra la longitud de una cadena de texto\n")

console.log("Longitud de la cadena de texto mundo: " + mundo.length);

// 3. Muestra el primer y último carácter de un string

console.log("\n3. Muestra el primer y último carácter de un string\n")

console.log("El primer carácter de la variable 'mundo' es: " + mundo[0] + ". y el último carácter es: " + mundo[10])

// 4. Convierte a mayúsculas y minúsculas un string

console.log("\n4. Convierte a mayúsculas y minúsculas un string\n")

console.log("Convertimos a mayúsculas la cadena de carácteres: " + mundo.toUpperCase())

console.log("Convertimos a mayúsculas la cadena de carácteres: " + mundo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log("\n5. Crea una cadena de texto en varias líneas\n")

let cadenaVL = `hola
me llamo 
Jose`

console.log(cadenaVL)

// 6. Interpola el valor de una variable en un string

console.log("\n6. Interpola el valor de una variable en un string\n")

console.log("Cambiamos 'mundo' por 'planeta': " + mundo.replace("mundo", "planeta"))

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log("\n7. Reemplaza todos los espacios en blanco de un string por guiones\n")

console.log(mundo.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log("\n8. Comprueba si una cadena de texto contiene una palabra concreta\n")

console.log("¿Contiene la palabra jose?: " + mundo.includes("jose"))

console.log("¿Contiene la palabra Hola?: " + mundo.includes("Hola"))

// 9. Comprueba si dos strings son iguales

console.log("\n9. Comprueba si dos strings son iguales\n")

let string1 = "asdfghjklñ"
let string2 = "qwertyuio"
let string3 = "asdfghjklñ"

let resultado = string1 === string2

console.log("¿Son iguales el string1 y el string2?: " + resultado)

resultado = string1 === string3

console.log("¿Y ahora?: " + resultado)

// 10. Comprueba si dos strings tienen la misma longitud

console.log("\n10. Comprueba si dos strings tienen la misma longitud\n")

let longitud1 = string1.length
let longitud2 = string2.length
let longitud3 = string3.length

resultado = longitud1 == longitud2;

console.log("¿Tienen la misma longitud las dos cadanas de texto?: " + resultado)

resultado = longitud1 == longitud3

console.log("¿Y ahora?: " + resultado)