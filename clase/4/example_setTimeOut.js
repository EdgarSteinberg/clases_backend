
//Bloque Sincrono
console.log(`[SYNC ] ¡Iniciando Tarea!`);
console.log(`[SYNC ] ¡Realizando Operacion!`);
console.log(`[SYNC ] ¡Tarea Finalizada`);


//Bloque Asincrono
const timer = (callback) => {
    setTimeout(() => {
        callback()
    }, 5000)
}

let operacion = () => console.log(`[SYNC ] Realizando operacion`);

console.log(`[SYNC ] ¡Iniciando Tarea!`);
timer(operacion);
console.log(`[SYNC ] ¡Tarea Finalizada`);