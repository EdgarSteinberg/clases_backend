const dividir = (dividiendo,divisor) => {
    return new Promise ((resolve, reject) => {
        if(divisor === 0){
            reject("No se puede dividir por cero");
        }else{
            resolve(dividiendo / divisor);
        }
    })
}

dividir(10,0).then(respuest => {
    console.log(`El resultado es : ${respuest}`);
}).catch(error => {
    console.log(error);
})


dividir(10,2).then(respuest => {
    console.log(`El resultado es : ${respuest}`);
}).catch(error => {
    console.log(error);
})