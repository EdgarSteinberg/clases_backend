import { contactService } from "../repository/index.js";
class ContactController{
  

    async getAll(){
        return await contactService.getContacts();
    }

    async create(contact){   
        return await contactService.createContact(contact)
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