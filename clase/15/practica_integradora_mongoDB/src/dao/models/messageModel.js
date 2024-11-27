import mongoose from 'mongoose';

const messageColection = 'messages_clase15';

const messageSchema = new mongoose.Schema({
    user: {type: String, require: true},
    message:{type: String, require: true}
});

const messageModel = mongoose.model(messageColection,messageSchema);

export default messageModel;