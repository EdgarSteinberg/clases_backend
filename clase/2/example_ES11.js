
let test = 0;

let test_or = test || "Sin Valor";
console.log(test_or);



// Operador Nullish ??
let test_nullish = test ?? "Sin Valor";
console.log(test_nullish);

test_nullish = null ?? "Sin Valor";
console.log(test_nullish);


// undfined test_nullish = notDefied ?? "Sin Valor";

// Operador Ternario
test_nullish = undefined ? undefined : "Sin Valor"; 
console.log(test_nullish);

test_nullish = (typeof notDifined != "undefined") ? notDifined : "Sin Valor"; 
console.log(test_nullish);
