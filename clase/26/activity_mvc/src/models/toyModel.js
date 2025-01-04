import mongoose from 'mongoose';

const toyCollection = 'toys_class_25';

const toySchema = new mongoose.Schema({
    name: { type: String, minLength: 3, require: true },
    description: { type: String, minLength: 3, require: true },
    creator_user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users_class_25', require: true }
    });

const toyModel = mongoose.model(toyCollection, toySchema);

export default toyModel;