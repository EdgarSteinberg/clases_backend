//import Contacts from "../dao/mongo/contactsMongo.js";
import Contacts from '../dao/memory/contantsMemory.js'

class ContactController{
    constructor(){
        this.dao = new Contacts();
    }

    async getAll(){
        return await this.dao.get();
    }

    async create(contact){
        const {first_name,last_name,phone} = contact;

        if(!first_name || !last_name || !phone){
            throw new Error(`Debes completar todos los campos`)
        }

        return this.dao.create({first_name,last_name,phone})
    }

    async update(updateContact, cid){
        if(!cid) throw new Error(`El contacto con ID: ${cid} no existe`);

        return this.dao.update(updateContact, cid)
    }

    async delete(cid){
        if(!cid) throw new Error(`El contacto con ID: ${cid} no existe`);

        return this.dao.delete(cid);
    }
}

export default ContactController;