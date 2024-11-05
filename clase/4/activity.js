const fs = require("fs");

const filePath = "./examplesFS/example.txt";

const fecha = new Date();

const dia = fecha.getDay();
const mes = fecha.getMonth();
const ano = fecha.getFullYear();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

const fechaActual = (`Día: ${dia}, Mes: ${mes}, Año: ${ano}, Hora: ${hora}, Minutos: ${minutos}, Segundos: ${segundos}`);

fs.writeFile(filePath, fechaActual, (error) => {
    if (error) {
        console.log(error)
        retrn
    }
    fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(data)
    })
})