import mongoose from "mongoose";

const productCollection = "products_clase_24";

const productSchema = mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    code: { type: String, require: true },
    price: { type: Number, require: true },
    status: { type: Boolean, require: false },
    stock: { type: Number, require: true },
    category: { type: String, require: true },
    thumbnails: { type: Array, require: false, default: [] },
});

const productModel = mongoose.model(productCollection,productSchema);

export default productModel;