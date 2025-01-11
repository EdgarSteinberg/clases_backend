import ContactDTO from "../dao/dto/contactDTO.js";

class ContactRepository{
    constructor(dao){
        this.dao = dao;
    }

    async getContacts(){
        return await this.dao.get()
    }

    async createContact(contact){
        const newContact = new ContactDTO(contact);
        return await this.dao.create(newContact)
    }
}

export default ContactRepository;