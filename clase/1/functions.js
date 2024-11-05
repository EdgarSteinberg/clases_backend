console.log("Functions")

function run(text) {
    console.log(text);
}

run("Hello Word");

const test = () => {
    console.log("Hola Mundo");
}

test();

function increment(n) {
    return n + 1
}

const incrementArrow = n => n + 1;

console.log(increment(10));
console.log("Arrow Function", incrementArrow(10));

function sumar(n1, n2) {
    return n1 + n2
}

const addArrow = (n1, n2) => n1 + n2;

console.log(sumar(10, 1));
console.log(addArrow(10, 1));


