import Contacts from "../dao/mongo/contactsMongo.js";
//import Contacts from '../dao/memory/contantsMemory.js'

import ContactDTO from "../dao/dto/contactDTO.js";

class ContactController{
    constructor(){
        this.dao = new Contacts();
    }

    async getAll(){
        return await this.dao.get();
    }

    async create(contact){
        const newContact = new ContactDTO(contact);
        return this.dao.create(newContact);
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