import mongoose from 'mongoose';

const messageCollection = 'messages_clase_24';

const messageSchema = new mongoose.Schema({
    user: {type: String, require: true},
    message: {type: String, require: true}
});

const messageModel = mongoose.model(messageCollection,messageSchema);

export default messageModel;