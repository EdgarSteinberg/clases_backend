import jwt from 'jsonwebtoken';
import userModel from "../userModel.js";
import { isValidPassword } from "../../utils/cryptoUtil.js";

class UserManager {

    async getAllUsers() {
        try {
            return await userModel.find().lean();
        } catch (error) {
            console.log(error);
            throw new Error(`Error al obtener los usuarios`);
        }
    }


    async getUserById(uid) {
        try {
            return await userModel.findOne({_id: uid}).lean();
        } catch (error) {
            console.log(error);
            throw new Error(`El usuario con ID: ${uid} no existe! `);
        }
    }

    async register(user) {
        const { first_name, last_name, email, age, password } = user;

        if (!first_name || !last_name || !email || !age || !password) {
            throw new Error(`Error al registrar el usuario!`);
        }

        try {
            const result = await userModel.create({ first_name, last_name, email, age, password });
            return {
                message: 'Usuario registrado correctamente',
                data: result
            };
        } catch (error) {
            console.log(error);
            throw new Error(`Error al crear el usuario`);
        }
    }


    async login(email, password){

        if(!email || !password){
            throw new Error(`Credenciales invalidas`);
        }

        try{
            const user = await userModel.findOne({email}).lean();

            if(!user) {
                throw new Error(`Credenciales invalidas`);
            }

            if(isValidPassword(user, password)){
                delete user.password
                return jwt.sign(user, "coderSecret", {expiresIn: "1h"});
            }
        }catch(error){
            console.log(error);
            throw new Error(`Credenciales invalidas`);
        }
    }
}


export default UserManager;