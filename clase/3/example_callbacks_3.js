let operacion = "";

const sumar = (n1, n2) => { operacion = "sumar"; return n1 + n2 };
const restar = (n1, n2) => { operacion = "restar"; return n1 - n2 };
const multiplicar = (n1, n2) => { operacion = "multiplicar"; return n1 * n2 };
const dividir = (n1, n2) => { operacion = "dividir"; return n1 / n2 };

const realizarOperacion = (n1, n2, callback) => {
    const resultado = callback(n1, n2);

    console.log(`Se van a ${operacion} los numeros ${n1} y ${n2} `)

    console.log(resultado)
}

realizarOperacion(1, 1, sumar);

realizarOperacion(10, 5, restar);

realizarOperacion(4, 3, multiplicar);

realizarOperacion(15, 5, dividir);