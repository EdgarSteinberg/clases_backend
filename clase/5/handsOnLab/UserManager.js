const fs = require("fs");
const crypto = require("crypto");

class UserManager {
    constructor(file) {
        this.file = file
    }

    async getAllUsers() {
        try {
            const user = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(user);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async CrearUsuario(user) {
        if (!user.user_name || !user.password) {
            return console.log("Debe proveer un usuario y contraseña!")
        }
        const new_user = {
            name: user.name ?? "Sin Nombre",
            last_name: user.last_name ?? "Sin Apellido",
            user_name: user.user_name,
            password: this.getHash(user.password)

        }
        const users = await this.getAllUsers();

        users.push(new_user);

        try{
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, '\t'));

            return "Usuario Creado Correctamente";
        }catch(error){
            console.log("Error al crear el usuario");
            return "Error al crear el usuario!"
        }
    }

    getHash(password) {
        return crypto.createHash("sha256").update(password).digest("hex");
    }

    async userValidator(user){
        const userValidate = {
            user_name: user.user_name,
            password: user.password
        }   
        const users = await this.getAllUsers();

        for(let key in users){
            if(userValidate.user_name === users[key].user_name){
                console.log(users[key].user_name)
                if(this.getHash(userValidate.password) === users[key].password) return "Usuario Logueado";
                console.log(users[key].password)
                return "Usuario o Password Incorrecta!";
            }
        }
        return "Usuario No Encontrado"
    }
}

module.exports = UserManager 
