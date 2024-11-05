console.log("Operador Exponencial");

let n1 = 2;
let n2 = 3;

let result = n1**n2;

console.log(`${n1} elevado a la ${n2} es igual a ${result}`);


console.log("Array con includes");

const array1 = [1, 2, 3];
console.log(array1.includes(2)); //True

const pets = ["Dog", "Cat", "Bat"]

const search = pets.includes("Dog");
console.log(`Busco en, ${pets} ,la palabra Dog, el resultado es: ${search}`); // True

console.log(`Busco en, ${pets} ,la palabra Bat, el resultado es: ${search} ${pets.includes("Bat", 2)}`);