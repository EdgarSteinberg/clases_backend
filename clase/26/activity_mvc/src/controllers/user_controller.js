import UserService from "../services/userService.js";

class UserController{

    constructor(){
        this.userService = new UserService();
    }

    async getAllUser(){
        return await this.userService.getAll();
    }

    async getUserById(uid){
        const user = await this.userService.getById(uid);

        if(!user) throw new Error(`El usuario no existe`);

        return user;
    }

    async createUser(user){
        const { first_name, last_name, email } = user;
    
        // Validación de campos antes de intentar crear el usuario
        if (!first_name || !last_name || !email) {
            throw new Error("Los campos 'first_name', 'last_name' y 'email' son requeridos.");
        }
    
        try {
            // Intento de creación del usuario
            const newUser = await this.userService.create({ first_name, last_name, email });
            return newUser;
        } catch (error) {
            // Manejo del error si falla la creación
            console.error("Error al crear el usuario:", error);
            throw new Error(`No se pudo crear el usuario. Detalles: ${error.message}`);
        }
    }

}

export default UserController;