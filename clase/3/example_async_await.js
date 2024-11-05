const dividir = (dividiendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero");
        } else {
            resolve(dividiendo / divisor);
        }
    })
}

const AsyncFunction = async (n1, n2,) => {
    try {
        const result = await dividir(n1, n2);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Termino la ejecucion")
    }
}

AsyncFunction(10,2);