import mongoose from "mongoose";
import contactModel from "./models/contactsModel.js";

class Contacts {
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/class_28_dao');
    }
    async get() {
        try {
            const contacts = await contactModel.find();
            return contacts;
        } catch (error) {
            throw new Error(`Error al obtener contactos: ${error.message}`);
        }
    }

    async create(contact) {
        try {
            const newContact = await contactModel.create(contact);
            return newContact;
        } catch (error) {
            throw new Error(`Error al crear contacto: ${error.message}`);
        }
    }

    async update(contactUpdate, cid) {
        try {
            const contact = await contactModel.findByIdAndUpdate(cid, contactUpdate, { new: true });
            return contact;
        } catch (error) {
            throw new Error(`Error al actualizar el contacto: ${error.message}`);
        }
    }

    async delete(cid) {
        try {
            const contact = await contactModel.deleteOne({ _id: cid });
            return contact;
        } catch (error) {
            throw new Error(`Error al eliminar el contacto: ${error.message}`);
        }
    }
}

export default Contacts;
