import messageModel from "../messageModel.js";

class ChatManager {
    
    async getAllMessages() {
        try {
            const messages = await messageModel.find().lean();
            return messages;
        } catch (error) {
            console.log(error);
            throw new Error(`Error al obtener todos los mensajes: ${error.message}`);
        }
    }

    async createMessage(data) {
        const { user, message } = data;

        if (!user || !message) {
            throw new Error(`Error al enviar el mensaje: Usuario y mensaje son requeridos.`);
        }

        try {
            const createdMessage = await messageModel.create({ user, message });
            return createdMessage;
        } catch (error) {
            console.log(error);
            throw new Error(`Error al enviar el mensaje: ${error.message}`);
        }
    }
}

export default ChatManager;
