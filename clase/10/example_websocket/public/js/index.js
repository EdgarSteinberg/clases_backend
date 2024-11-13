console.log("Hola mundo");

const socket = io();

socket.emit('message', "Hola me estoy comunicando desde un Websocket")

socket.on('evento para socket individual', data => {
    console.log(data)
})

socket.on('evento para todos menos al socket actual',  data => {
    console.log(data)
})

socket.on('evento para todos', data => {
    console.log(data)
})