import mongoose from 'mongoose';

const userCollection = 'users_class_25';

const userSchema = new mongoose.Schema({
    first_name: { type: String, minLength: 3, require: true },
    last_name: { type: String, minLength: 3, require: true },
    email: { type: String, minLength: 3, unique: true, require: true }
});

const userModel = mongoose.model(userCollection,userSchema);

export default userModel;