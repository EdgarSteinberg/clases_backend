import mongoose from 'mongoose';
import { createHash } from '../utils/cryptoUtil.js';

const userColection = "user_clase_24";

const userSchema = new mongoose.Schema({
    first_name: {type: String , require: true},
    last_name: {type: String , require: true},
    email: {type: String ,unique:true,  require: true},
    age: {type: Number, require: true},
    password: {type: String, require:true},
    cart: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "carts_clase_24",
                }
            }
        ],
        default: []
    },
    role: {type: String , require: true, default: "user"}
});


userSchema.pre("save", function () {

    this.password = createHash(this.password);
})

const userModel = mongoose.model(userColection,userSchema);

export default userModel;