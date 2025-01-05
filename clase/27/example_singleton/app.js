import MongoSingleton from "./mongoDbSingleton.js";

// No instancia la clase sino que obtiene la instancia
const mongoInstance = MongoSingleton.getInstance();

// Se intenta volver a instanciar la conexion (Validando su existencia)
const anotherMongoIntance = MongoSingleton.getInstance();