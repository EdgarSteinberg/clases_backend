import mongoose from "mongoose";

const userColection = "users_16";

const userSchema =  new mongoose.Schema({
    first_name: {type: String, require: true, index: true},
    last_name: {type: String, require: true},
    email: {type: String, require: true},
    gender: {type: String, require: true}
});

const userModel = mongoose.model(userColection, userSchema);

export default userModel;