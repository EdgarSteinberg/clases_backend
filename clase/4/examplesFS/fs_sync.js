const fs = require("fs")

const filePath = "./examplesFS/example.txt"

fs.writeFile(filePath, "Hola Todos Yo Soy El Leon!"); //crea archivo

if(fs.existsSync(filePath)){ //valida si el archivo existe
    let contenido = fs.readFile(filePath, "utf8", "\t")//lee el archivo

    console.log(contenido);

    fs.appendFile(filePath, " Rugio la Bestia en medio de la avenida");//agrega mas contenido al archivo

    contenido = fs.readFile(filePath, "utf8", "\t");//lee el nuevo archivo

    console.log(contenido);

    fs.unlinkSync(filePath);// elimina el archivo
}
