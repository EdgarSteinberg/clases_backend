const UserManager = require("./UserManager");

const UM = new UserManager(`${__dirname}/Usuarios.json`);

const createUsers = async () => {

    await UM.CrearUsuario({
        name: "Edgar",
        last_name: "Steinberg",
        user_name: "El Negro73",
        password: "123"
    })

    await UM.CrearUsuario({
        name: "Juan",
        last_name: "Tomas",
        password: "123"
    })


    console.log(await UM.getAllUsers())
}

//createUsers();

const verifyUsers = async () => {
    let result = await UM.userValidator({
        name: "Edgar",
        last_name: "Steinberg",
        user_name: "El Negro73",
        password: "asdsad"
    })
    console.log(result)

    result = await UM.userValidator({
        name: "Edgar",
        last_name: "Steinberg",
        user_name: "El Negro73",
        password: "123"
    })
    console.log(result)
}

verifyUsers();