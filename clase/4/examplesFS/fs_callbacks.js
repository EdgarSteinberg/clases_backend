const fs = require("fs")

const filePath = "./examplesFS/example.txt"


fs.writeFile(filePath, "Hola Todos yo Soy El LEON" ,(error) => {
    if (error) return console.log("Error al escribir el archivo");

    fs.readFile(filePath, "utf8" ,(error, result) => {
        if (error) return console.log("Error al leer el archivo");
        console.log(result)

        fs.appendFile(filePath, "Agregando mas contenido", (error) => {
            if (error) return console.log("Error al actualzar el archivo");

            fs.readFile(filePath, "utf8", (error, result) => {
                if (error) return console.log("Error al leer el archivo");
                console.log(result)

                fs.unlink(filePath, (error) => {
                    if (error) return console.error("error al eliminar el archivoo")
                })
            })
        })
    })
})  