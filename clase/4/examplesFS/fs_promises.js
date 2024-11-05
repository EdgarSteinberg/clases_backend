const fs = require("fs");

//const filePath = "./examplesFS/example.txt";

const runAsync = async (filePath) => {

    try{
        await fs.promises.writeFile(filePath, "Hola Coders, estoy en un archivo con promesas");

        let content = await fs.promises.readFile(filePath, "utf-8");
    
        console.log(content);
    
        await fs.promises.appendFile(filePath, " Mas Contenido");
    
        content = await fs.promises.readFile(filePath, "utf-8");
    
        console.log(content);
    
        setTimeout(() => {
            fs.promises.unlink(filePath)
        }, 3000)
    
    }catch(error){
        console.log(error)
    }
   

}

runAsync("./example.txt");