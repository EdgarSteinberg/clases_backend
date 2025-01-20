import businessModel from '../models/businessMode.js';

class Business {

    getBusines = async () => {
        try{
            return await businessModel.find();
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    getBusinesById = async (id) => {
        try{
            return await businessModel.findOne({_id: id});
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    createBusiness = async (business) => {
        try{
            return await businessModel.create(business);
        }catch(error){
            console.log(error.message);
            return null;
        }
    }

    updateBusiness = async (id, business) => {
        try{
            return await businessModel.updateOne({_id: id},{$set: business});
        }catch(error){
            console.log(error.message);
            return null;
        }
    }
}

export default Business;