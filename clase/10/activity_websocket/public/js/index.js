console.log("Hola mundo");

const socket = io();

// const textInput = document.getElementById('text-input');
// const showText = document.getElementById("show-text");

// textInput.addEventListener("input", (e) => {
//     socket.emit("message", textInput.value);
// });

// socket.on("messageShow", data => {
//     showText.textContent = data
// });

const chatInput = document.getElementById('chat-message');
const allmesages = document.getElementById('all-message');

socket.on("allMessages", data => {
    let chat = "";

    data.map(msj => chat += `<b>${msj.socketId} : ${msj.message}<br>`)
    //allmesages.innerHTML = JSON.stringify(data);
    allmesages.innerHTML = chat;
});

function send(){
    socket.emit("chatMessage", chatInput.value);
    chatInput.value = "";
}

