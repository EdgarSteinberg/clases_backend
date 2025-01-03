function listNumbers(...numbers) {

    let error = false;
    let types = [];
    numbers.forEach(item => {
        if (isNaN(parseFloat(item))) error = true;

        types.push(typeof item);
    });

    if (error) {
        console.error("Invalid parameters", types);
        process.exit(-4);
    }

    console.log(numbers);
}

process.on("exit", code => {
    console.log("Termino el proceso...")
    if (code === -4) console.log("Proceso finalizado por argumentacion invalida en una funcion");
});

//Examples
listNumbers(7, "Hola", true,{name: "edgar"}, 5, 8);