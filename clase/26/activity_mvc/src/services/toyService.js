import toyModel from "../models/toyModel.js";

class ToyService{

    async getAll(){
      return await toyModel.find();
    }

    async getById(uid){
        const result = await toyModel.findOne({_id: uid});

        if(!result) throw new Error(`El usuario con ID : ${uid} no existe!`);

        return result;
    }

    async create(toy){
        const result = await toyModel.create(toy)

        return result;
    }
}

export default ToyService;