const socket = io();

let user = "";
let chatBox = document.getElementById('chatBox');

Swal.fire({
    title: "Identifícate!",
    input: "text",
    text: "Ingresa un nombre de usuario para identificarte!",
    inputValidator: (value) => {
        return !value && 'Necesitas escribir un nombre de usuario para continuar';
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;
    
    socket.emit("UserConnect", user);
});

function send() {
    if (chatBox.value.trim().length > 0) { 
        console.log(`Mensaje: ${chatBox.value}`);
        socket.emit("message", {
            user,
            message: chatBox.value
        });
        chatBox.value = ""; 
    }
}

socket.on("messagesChat", data => {
    let log = document.getElementById('messagesLogs');
    let messages = "";
    data.forEach(msj =>  {
        messages += `${msj.user} ${msj.message} <br>`
        
    });

    log.innerHTML = messages;
})

socket.on("newUser", data => {
    Swal.fire({
        text: `${data} se ha unido al chat`,
        toast: true,
        position: "top-right"
    })
})