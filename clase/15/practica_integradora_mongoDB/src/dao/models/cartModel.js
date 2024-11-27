import mongoose from 'mongoose';

const cartCollection = "carts_clase15";

const cartSchema = new mongoose.Schema({
    products:{
        type: [
            {
                product : {
                    type: mongoose.Schema.ObjectId,
                    ref: "products"
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        default: []
    }
});

const cartModel = mongoose.model(cartCollection,cartSchema);

export default cartModel;