// 1. Escribe un comentario en una linea

    // Este es un comentario de una sola línea

// 2. Escribe un comentario en varias lineas

    /*
    Este es 
    un comentario 
    de varias líneas.
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    console.log("\n3. Declara variables con valores asociados a todos los datos de tipo primitivos\n");

    let variableString = "Hola mundo";
    let variableNumero = 8;
    let variableNumeroDecimal = 3.14;
    let variableBooleano = true;
    let variableUndefined;
    let variableNull = null;
    let variableSymbol = Symbol("simbolo");
    let variableBigInt = BigInt(123456789123456789123456789123456789123456789123456789);
    let variableBigInt2 = 123456789123456789123456789123456789123456789123456789n;

    console.log("Valores de las variables definidos");

// 4. Imprime por consola el valor de todas las variables

    console.log("\n4. Imprime por consola el valor de todas las variables\n");

    console.log(variableString);
    console.log(variableNumero);
    console.log(variableNumeroDecimal);
    console.log(variableBooleano);
    console.log(variableUndefined);
    console.log(variableNull);
    console.log(variableSymbol);
    console.log(variableBigInt);
    console.log(variableBigInt2);

// 5. Imprime por consola el tipo de todas las variables

    console.log("\n5. Imprime por consola el tipo de todas las variables\n");

    console.log(typeof variableString);
    console.log(typeof variableNumero);
    console.log(typeof variableNumeroDecimal);
    console.log(typeof variableBooleano);
    console.log(typeof variableUndefined);
    console.log(typeof variableNull);
    console.log(typeof variableSymbol);
    console.log(typeof variableBigInt);
    console.log(typeof variableBigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    console.log("\n6. A continuación, modifica los valores de las variables por otros del mismo tipo\n");

    variableString = 'Hola de nuevo mundo';
    variableNumero = 88;
    variableNumeroDecimal = 14.3;
    variableBooleando = false;
    variableUndefined = "Ahora ya tengo valor";
    variableNull = "Ya no soy null";
    variableSymbol = Symbol("Nuevo simbolo");
    variableBigInt = BigInt(987654321987654321987654321987654321987654321987654321);
    variableBigInt2 = 987654321987654321987654321987654321987654321987654321n;

    console.log(variableString);
    console.log(variableNumero);
    console.log(variableNumeroDecimal);
    console.log(variableBooleano);
    console.log(variableUndefined);
    console.log(variableNull);
    console.log(variableSymbol);
    console.log(variableBigInt);
    console.log(variableBigInt2);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    console.log("\n7. A continuación, modifica los valores de las variables por otros de distinto tipo\n");

    variableString = 1;
    variableNumero = "88";
    variableNumeroDecimal = "14.3";
    variableBooleando = "false";
    variableUndefined = null;
    variableNull = 987654321987654321987654321987654321987654321987654321n;
    variableBigInt = Symbol("Nuevo simbolo");
    variableSymbol = BigInt(987654321987654321987654321987654321987654321987654321);
    variableBigInt2 = true;

    console.log(variableString);
    console.log(variableNumero);
    console.log(variableNumeroDecimal);
    console.log(variableBooleano);
    console.log(variableUndefined);
    console.log(variableNull);
    console.log(variableSymbol);
    console.log(variableBigInt);
    console.log(variableBigInt2);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    console.log("\n8. Declara constantes con valores asociados a todos los tipos de datos primitivos\n");

    const constanteString = "Hola constante";
    const constanteNumero = 42;
    const constanteNumeroDecimal = 3.1416;
    const constanteBooleano = false;
    const constanteUndefined = undefined;
    const constanteNull = null;
    const constanteSymbol = Symbol("constante simbolo");
    const constanteBigInt = BigInt(123456789123456789123456789123456789123456789123456789);
    const constanteBigInt2 = 123456789123456789123456789123456789123456789123456789n;

    console.log(constanteString);
    console.log(constanteNumero);
    console.log(constanteNumeroDecimal);
    console.log(constanteBooleano);
    console.log(constanteUndefined);
    console.log(constanteNull);
    console.log(constanteSymbol);
    console.log(constanteBigInt);
    console.log(constanteBigInt2);

// 9. A continuacion, modifica los valores de las constantes

    console.log("\n9. A continuacion, modifica los valores de las constantes\n");

    // Esto no se puede hacer con constantes, ya que son constantes y no se pueden reasignar nuevos valores

    // constanteString = "Hola de nuevo constante";
    // constanteNumero = 84;
    // constanteNumeroDecimal = 6.2832;
    // constanteBooleano = true;
    // constanteUndefined = "Ahora ya tengo valor";
    // constanteNull = "Ya no soy null";
    // constanteSymbol = Symbol("Nuevo simbolo constante");
    // constanteBigInt = BigInt(987654321987654321987654321987654321987654321987654321);
    // constanteBigInt2 = 987654321987654321987654321987654321987654321987654321n;

// 10. Comenta las lineas que produzcan algún tipo de error al ejecutarse

    console.log("\n10. Comenta las lineas que produzcan algún tipo de error al ejecutarse\n");

    console.log("Las lineas que se han comentado son todas las lineas del ejercicio 9 ya que las constantes no se pueden modificar los valores una vez ya definidos");