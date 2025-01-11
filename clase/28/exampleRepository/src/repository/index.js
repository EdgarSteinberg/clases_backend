import Contacts from "../dao/mongo/contactsMongo.js";
import ContactRepository from "./contacts_reposiory.js";

export const contactService = new ContactRepository(new Contacts());