const suma1 = (num1, num2) => {
    if (!num1 && !num2) return 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;

    return num1 + num2
}

const suma2 = (...nums) => {
    if (nums.length === 0) return 0;
    let validInput = true;

    for (let i = 0; i < nums.length && validInput; i++) {
        if (typeof nums[i] !== 'number') validInput = false
    }

    if (!validInput) return null;

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }

    return result;
}


const suma = (...nums) => {
    if (nums.length === 0) return 0;
    if (!nums.every(num => typeof num === 'number')) return null;
    return nums.reduce((prev, current) => prev + current)
}

//Ecenarios
let testsPasados = 0;
let testsCount = 1;

let result;

//Test 1
console.log(`Test ${testsCount}: La funcion debe devolver null si algun parametro no es numerico`);

result = suma(2, '2');


if (result === null) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado, se recibio ${typeof result}, pero se esperaba null`);
}
testsCount++;

console.log('--------------------------');




//Test 2
console.log(`Test ${testsCount}: La funcion debe devolver 0 si no se paso ningun parametro`);

result = suma();

if (result === 0) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++
} else {
    console.log(`Test ${testsCount} no pasado, se recibio ${result}, pero se esperaba 0`);
}
testsCount++;


console.log('--------------------------');




//Test 3
console.log(`Test ${testsCount}: La funcion debe resolver la suma correctamente`);

result = suma(6, 2);

if (result === 8) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++
} else {
    console.log(`Test ${testsCount} no pasado, se recibio ${result}, pero se esperaba 8`);
};
testsCount++;

console.log('--------------------------');




//Test 4
console.log(`Test ${testsCount}: La funcion debe poder realizar una suma con cualquier cantidad de numeros`);

result = suma(1, 2, 3, 4, 5);

if (result === 15) {
    console.log(`Test ${testsCount} pasado!`);
    testsPasados++;
} else {
    console.log(`Test ${testsCount} no pasado, se recibio ${result}, pero se esperaba 15`);
}




console.log('--------------------------');

if (testsCount === testsPasados) {
    console.log("Todos los tests han pasado con éxito!");
} else {
    console.log(`Se pasaron ${testsPasados} tests de un total de ${testsCount}`);
}