import mongoose from 'mongoose';

const orderCollection = 'orders';

const orderSchmea = new mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        default: 'medium'
    },
    price: Number,
    quantity: Number,
    date: Date

});

const order_model = mongoose.model(orderCollection,orderSchmea);

export default order_model;