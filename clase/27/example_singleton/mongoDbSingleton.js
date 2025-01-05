import mongoose from 'mongoose';


class MongoSingleton {
    static #instance;

    constructor(connectionString){
        mongoose.connect(connectionString);
    }


    static getInstance(){
        if(this.#instance) {
            console.log("Already connected");
            return this.#instance;
        }
        this.#instance = new MongoSingleton("mongodb://127.0.0.1:27017/arquitectura-capas-2025");
        console.log("Connected");
        return this.#instance;
    }
}

export default MongoSingleton;