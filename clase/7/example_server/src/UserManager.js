import fs from 'fs';

class UserManager {
    constructor(file) {
        this.file = file;
    }

    async getAllUser() {
        try {
            // Verifica si el archivo existe antes de intentar leerlo
            // if (!fs.existsSync(this.file)) {
            //     // Si el archivo no existe, crea un archivo vacío con un array
            //     await fs.promises.writeFile(this.file, JSON.stringify([]));
            // }
            const users = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(users);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async createUser(first_name, last_name, age, email) {
        // Validación de campos obligatorios
        if (!first_name || !last_name || !age || !email) {
            throw new Error("Debes completar todos los campos"); // Esto genera un error manejable en la ruta
        }
        
        const newUser = {
            id: await this.getId(),
            first_name,
            last_name,
            age,
            email
        };
    
        const users = await this.getAllUser();
        users.push(newUser);
    
        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));
            return "Usuario Creado Correctamente";
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear el usuario");
        }
    }
    

    async getId() {
        const users = await this.getAllUser();
        return users.length > 0 ? users[users.length - 1].id + 1 : 1;
    }

    async updateUser(id, user) {
        const users = await this.getAllUser();
        let updatedUser = null; 

        for (let key in users) {
            if (users[key].id == id) {
                users[key].first_name = user.first_name ?? users[key].first_name;
                users[key].last_name = user.last_name ?? users[key].last_name;
                users[key].age = user.age ?? users[key].age;
                users[key].email = user.email ?? users[key].email;

                updatedUser = users[key];
                break;
            }
        }

        if (!updatedUser) {
            return "Usuario no encontrado";
        }

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));
            return updatedUser;
        } catch (error) {
            console.log(error);
            return "Error al actualizar el usuario";
        }
    }

    async deleteUser(id) {
        try {
            const users = await this.getAllUser();
            const filteredUsers = users.filter(user => user.id !== Number(id));

            if (filteredUsers.length === users.length) {
                return "Usuario no encontrado";
            }

            await fs.promises.writeFile(this.file, JSON.stringify(filteredUsers, null, "\t"));
            return `Usuario con ${id} eliminado correctamente`;
        } catch (error) {
            console.log(error);
            return "Error al eliminar usuario";
        }
    }
}

export default UserManager;
