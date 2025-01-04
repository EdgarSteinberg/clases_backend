import userModel from "../models/userModel.js";

class UserService{

    async getAll(){
      return await userModel.find();
    }

    async getById(uid){
        const result = await userModel.findOne({_id: uid});

        if(!result) throw new Error(`El usuario con ID : ${uid} no existe!`);

        return result;
    }

    async create(user){
        const result = await userModel.create(user)

        return result;
    }
}

export default UserService;