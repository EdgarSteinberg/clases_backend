const ManagerUsuarios = require("./hands_on_lab");

const MU = new ManagerUsuarios(`${__dirname}/Usuarios.json`);

const run = async () => {
    await MU.CreateUser({
        nombre: "Edgar",
        apellido: "Steinberg",
        edad: 34,
        curso: "Sql"
    });

    let users = await MU.consultarUsuarios();
    console.log(users);

    await MU.CreateUser({
        nombre: "Juan",
        edad: 33,
        curso: "UX/UI"
    });

    users = await MU.consultarUsuarios();
    console.log(users);
}

run();