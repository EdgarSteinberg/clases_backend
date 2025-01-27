import express from 'express';

import { addLogger } from './utils/logger.js';

const app = express();

app.use(addLogger)

app.get("/", (req,res) => {
    req.logger.warn("¡Alerta!")
    res.send({message: "¡Prueba Logger!"});
})

const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Server start in http://localhost:${PORT}`)
});