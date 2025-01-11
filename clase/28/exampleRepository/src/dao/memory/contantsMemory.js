
class Contacts {

    constructor() {
        this.data = [
            {
                id: 1,
                first_name: "Edgar",
                last_name: "Steinberg",
                phone: "1165724140"
            },
            {
                id: 2,
                first_name: "Joaco",
                last_name: "Cejas",
                phone: "1172410255"
            },
        ]
    }

    async get() {
        return this.data
    }

    async create(contact) {
        contact.id = this.#getId();
        this.data.push(contact);
        return contact;
    }

    async update(contact, cid) {
        if (!cid) throw new Error(`El contacto con ID: ${cid} no existe`);
        const parsedCid = parseInt(cid);

        const contactFind = this.data.find(contact => contact.id == parsedCid);

        // Actualizamos dinámicamente solo las propiedades que se envíen
        Object.keys(contact).forEach(key => {

            contactFind[key] = contact[key];

        });

        // if (contact.first_name) {
        //     contactFind.first_name = contact.first_name;
        // }

        // if (contact.last_name) {
        //     contactFind.last_name = contact.last_name;
        // }

        // if (contact.phone) {
        //     contactFind.phone = contact.phone;
        // }

        // Retornamos el contacto actualizado
        return contactFind;
    }

    async delete(cid) {
        if (!cid) throw new Error(`El contacto con ID: ${cid} no existe`);
        const parsedCid = parseInt(cid);

        const contactFilter = this.data.filter(contact => contact.id !== parsedCid);

        this.data = contactFilter;

        return { status: "success", message: `Contacto con ID: ${cid} eliminado correctamente` };
    }


    #getId() {
        if (this.data.length > 0) {
            return this.data[this.data.length - 1].id + 1
        }
        return 1
    }
}

export default Contacts;