import mongoose from 'mongoose';

const userCollection = "users_class29";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "orders_class29"
        }
    ]
});

const userModel = mongoose.model(userCollection,userSchema);

export default userModel;