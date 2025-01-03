import express from 'express';
import { fork } from 'child_process';

const app = express();

let viewsCounter = 0;

app.get("/", (req, res) => {
    viewsCounter++;
    res.send(`Se han realizado ${viewsCounter} visitas a la pagina`);
})

app.get("/calculo-bloq", (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    res.send(`[Operacion bloqueante] El resultado de la suma es ${suma}`);
});

//Utilizar child_process
app.get("/calculo-nobloq", (req, res) => {
    const child = fork("./blockedProcess.js");
    child.send("start");
    child.on("message", result => {
        res.send(`[Operacion NO bloqueante] El resultado es ${result}`);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port http://localhost:${PORT}`);
});