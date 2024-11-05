const fs = require("fs")


const readPackageJson = async () => {
    let packageJsonString = await fs.promises.readFile("./package.json", "utf-8");
    //console.log(packageJson) // String

    let packageJson = JSON.parse(packageJsonString);
    //console.log(packageJson) // Object

    return { contenidoString: packageJsonString, contenidoObj: packageJson };
}


const createAndReadInfoJson = async () => {
    const info = await readPackageJson();

    await fs.promises.writeFile("./info.json", JSON.stringify(info, null, '\t'));

    const infoReadFile = await fs.promises.readFile("./info.json", "utf-8");

    console.log(infoReadFile);
}

createAndReadInfoJson();