import userModel from '../models/userModel.js';

class User{
    getUsers = async () => {
        try{
            return await userModel.find();
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    getUserById = async (id) => {
        try{
            return await userModel.findOne({_id: id});
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    saveUser = async (user) => {
        try{
            return await userModel.create(user);
        }catch(error){
            console.log(error.message);
            return null;
        }
    }
}

export default User;