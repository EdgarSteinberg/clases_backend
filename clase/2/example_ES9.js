console.log("Operadore spread");

function add(...numbers) {
    let add = 0;

    for (let n of numbers) {
        add += n
    }

    return add;
}

const result = add(2, 3, 10, 9, 5);

console.log(`El resultado es: ${result}`);


console.log("Operador Rest");

let obj = {
    name: "Edgar",
    last_name: "Steinberg",
    age: 34
}


const { last_name, ...new_obj } = obj;

console.log(new_obj);


console.log("Operador spread copia profunda de objetos");

const coders = {
    ivan: 'estudiante 1',
    jose: 'estudiante 2',
    jean: 'estudiante 3',
    profes: {
        joaquin: 'profe',
        nerea: 'tutora adjunta'
    }
}



const coders2 = coders;
coders2.ivan = "Otro estudiante";

console.log(`objeto coders`, coders);
console.log(`objeto coders 2`, coders2);

const coders3 = { ...coders };
coders3.jean = "otra cosa";

console.log(`objeto coders`, coders);
console.log(`objeto coders3`, coders3);


// Copias al segundo nivel tramuta el objeto orignal
coders3.profes.joaquin = "Joaco"
console.log(`objeto coders`, coders);
console.log(`objeto coders3`, coders3);


// Copias profundas

const coders_copia_profunda = JSON.parse(JSON.stringify(coders));
coders_copia_profunda.profes.nerea = "Lucia"

console.log(`objeto coders`, coders);
console.log(`coders_copia_profunda.profes`, coders_copia_profunda);


