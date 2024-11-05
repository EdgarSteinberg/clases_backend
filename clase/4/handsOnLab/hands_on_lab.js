const fs = require("fs");

class ManagerUsuarios {
    constructor(archivo) {
        this.archivo = archivo;
    }

    async consultarUsuarios(){
        try{
            const usuarios = await fs.promises.readFile(this.archivo, "utf-8");
            return JSON.parse(usuarios);
        }catch(error){
            console.log(error);
            return [];
        }
    }

    async CreateUser(usuario) {
        const nuevo_usuario = {
            nombre: usuario.nombre ?? "Sin Nombre",
            apellido: usuario.apellido ?? "Sin Apellido",
            edad: usuario.edad ?? "Sin Edad",
            curso: usuario.curso ?? "Sin Curso"
        }
        const usuarios = await this.consultarUsuarios();
        usuarios.push(nuevo_usuario)

        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(usuarios, null, '\t'));
            console.log("Usuario Creado Correctamente!")
        } catch (error) {
            console.log("Error Al Crear El Usuario", error)
        }
    }

 }

module.exports = ManagerUsuarios;