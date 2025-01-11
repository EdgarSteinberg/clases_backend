
class ContactDTO{
    constructor(contact){
        this.first_name = contact.first_name ?? "Unknow";
        this.last_name = contact.last_name ?? "";
        this.full_name = `${this.first_name} ${this.last_name}`;
        this.phone = contact.phone ?? 0;
    }
}

export default ContactDTO;