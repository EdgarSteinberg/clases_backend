
//Bloque Sincrono
console.log(`[SYNC ] ¡Iniciando Tarea!`);
console.log(`[SYNC ] ¡Realizando Operacion!`);
 

for(let i = 1; i <= 5; i++){
    console.log(i);
}
console.log(`[SYNC ] ¡Tarea Finalizada!`);

const countAsync = () => {
    let counter = 1;
    console.log(`[SYNC ] ¡Realizando Operacion!`);
    
        let timer = setInterval(() => {
            console.log(counter ++);
            if(counter > 5){
                clearInterval(timer)
            }
        },1000)
}

console.log(`[SYNC ] ¡Iniciando Tarea!`);
countAsync();
console.log(`[SYNC ] ¡Tarea Finalizada!`);