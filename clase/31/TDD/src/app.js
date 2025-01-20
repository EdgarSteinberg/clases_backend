const login = (user, password) => {
    if (!user || !password) {
        return "No se ha proporcionado un password o un usuario";
    }

    if (password !== "123" || user !== "coderUser") {
        return "credenciales incorrectas";
    } else {
        return "Logueado";
    }
};

// Escenarios
let testsPasados = 0;
let testsCount = 1;

let result;


// Test 1
console.log(`Test ${testsCount}: si se pasa un password vacío, la función debe devolver ("No se ha proporcionado un password o un usuario")`);
result = login("coderUser", "");

if (result === "No se ha proporcionado un password o un usuario") {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado. Se recibió: "${result}", pero se esperaba: "No se ha proporcionado un password o un usuario".`);
}
testsCount++;
console.log('--------------------------');


//----------------------------------------------------------------------//



// Test 2
console.log(`Test ${testsCount}: si se pasa un usuario vacío, la función debe devolver ("No se ha proporcionado un password o un usuario")`);
result = login("", "123");

if (result === "No se ha proporcionado un password o un usuario") {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado. Se recibió: "${result}", pero se esperaba: "No se ha proporcionado un password o un usuario".`);
}
testsCount++;
console.log('--------------------------');


//----------------------------------------------------------------------//



// Test 3
console.log(`Test ${testsCount}: si se pasa un password incorrecto, la función debe devolver ("credenciales incorrectas")`);
result = login("coderUser", "777");

if (result === "credenciales incorrectas") {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado. Se recibió: "${result}", pero se esperaba: "credenciales incorrectas".`);
}
testsCount++;



//----------------------------------------------------------------------//



// Test 4
console.log(`Test ${testsCount}: si se pasa un usuario incorrecto, la función debe devolver ("credenciales incorrectas")`);
result = login("777", "123");

if (result === "credenciales incorrectas") {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado. Se recibió: "${result}", pero se esperaba: "credenciales incorrectas".`);
}
testsCount++;
console.log('--------------------------');


//----------------------------------------------------------------------//



// Test 5
console.log(`Test ${testsCount}: si el usuario y contraseña coinciden, la función debe devolver ("Logueado")`);
result = login("coderUser", "123");

if (result === "Logueado") {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado. Se recibió: "${result}", pero se esperaba: "Logueado".`);
}
console.log('--------------------------');




//----------------------------------------------------------------------//
if (testsCount === testsPasados) {
    console.log("Todos los tests han pasado con éxito!");
} else {
    console.log(`Se pasaron ${testsPasados} tests de un total de ${testsCount}`);
}