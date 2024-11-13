const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Mi primer hola mundo desde BACKEND!");
})

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
}).on('error', (error) => {
    console.log(`Error in init server on port ${PORT}`)
})