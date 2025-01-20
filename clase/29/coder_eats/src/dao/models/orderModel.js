import mongoose from 'mongoose';

const orderCollection = "orders_class29";

const orderSchema = new mongoose.Schema({
    number : String,
    business: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "business_class29"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users_class29"
    },
    products : [],
    totalPrice: Number,
    status: String
});

const orderModel = mongoose.model(orderCollection, orderSchema);

export default orderModel;