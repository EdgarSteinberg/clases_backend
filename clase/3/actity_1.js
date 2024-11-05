

const sumar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("Operacion Innecesaria");
        } else {
            resolve(n1 + n2);
        }
    })
}

const restar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("Operacion Innecesaria");
        } else if (n1 - n2 < 0) {
            reject("La calculadora solo puede devolver numeros positivos");
        } else {
            resolve(n1 + n2);
        }
    })
}

const multiplicar = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n1 < 0 || n2 < 0) {
            reject("Solo puede multiplicar numeros positivos");

        } else {
            resolve(n1 * n2);
        }
    })
}

const dividir = (n1, n2) => {
    return new Promise((resolve, reject) => {
        if (n2 === 0) {
            reject("No se puede dividir por cero");

        } else {
            resolve(n1 / n2);
        }
    })
}

const calculos = async (n1, n2) => {
    try {
        const suma = await sumar(n1, n2);
        const resta = await restar(n1, n2);
        const multiplicacion = await multiplicar(n1, n2);
        const dividision = await dividir(n1, n2);

        console.log(`Se operan los numeros ${n1} y ${n2}`)
        console.log(` Suma: ${suma} \n resta: ${resta} \n multiplicacion: ${multiplicacion} \n dividicion: ${dividision}`)
    } catch (error) {
        console.log(error)
    }
};
calculos(10, 2)
calculos(10, -2)
calculos(0, 6)