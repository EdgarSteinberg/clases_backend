// Scopes

let i = 1;

function test(){
    if(true) {
        let j = 2;

        console.log(i);
        console.log(j);
    }
      console.log(i);
      // console.log(j) Genera un error;
}

test();

// Const

const a = 1;

// a = 0 ; Genera un error;

// const number = 1;
// number += 1 Genera un error;

// console.log(number);

// const text = "Hola";
// text += "Mundo"; Genera un error;

const array = [1, 2, 3, 4 ];
console.log(array);

//Modificar algun elemento
array[0] = 10;
console.log(array);

//Agrego un elemento mas
array.push(25);
console.log(array);

array[2] = "HOLA MUNDO";
console.log(array);

// array = "STRING" Genera un error;

// Ultimo elemento de un array
let new_array = array[array.length - 1];
console.log("Ultimo Elemento: " , new_array);

const user = {name : 'Edgar'};
user.name = "Steinberg";
console.log(user);

console.log("Finalizacion del codigo");

