const moment = require("moment");

//console.log(moment().format("DD/MM/YYY H:m:s"))

const dateNow = moment();

console.log(dateNow);

const fecha_nacimiento = moment("1990-02-18")

console.log(fecha_nacimiento);

if(fecha_nacimiento.isValid()){
    const allDays = dateNow.diff(fecha_nacimiento, "days");

    console.log(`Han pasando ${allDays} dias, desde mi nacimiento`)
}