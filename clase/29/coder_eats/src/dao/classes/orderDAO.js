import orderModel from '../models/orderModel.js';

class Order {

    getOrders = async () => {
        try {
            return await orderModel.find();
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    getOrderById = async (id) => {
        try {
            return await orderModel.findOne({ _id: id });
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    createOrder = async (order) => {
        try {
            return await orderModel.create(order);
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    resolveOder = async (id, order) => {
        try {
            return await orderModel.updateOne({ _id: id }, { $set: order });
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
}

export default Order