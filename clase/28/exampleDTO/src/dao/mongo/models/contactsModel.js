
import mongoose from 'mongoose';

const contactCollection = "contacts_class28";

const contactSchema = new mongoose.Schema({
    full_name: {type: String, require: true},
    first_name : {type: String, require:true},
    last_name: {type:String, require:true},
    phone: {type:Number, require:true}
});

const contactModel = mongoose.model(contactCollection,contactSchema)

export default contactModel;
