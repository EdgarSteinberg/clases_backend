import User from '../dao/classes/userDAO.js'

const userService = new User();

const responseError = {
    status: 'error',
    error: "Something went wrong, try again later"
}
const getUsers = async (req, res) => {
    const result = await userService.getUsers();
    res.send({ status: "success", result });
}

const getUsersById = async (req, res) => {
    const { uid } = req.params;
    const result = await userService.getUserById(uid);

    if (!result) return res.status(500).send(responseError);

    res.send({ status: "success", result });
}

const saveUser = async (req, res) => {
    const user = req.body;
    const result = await userService.saveUser(user);

    if (!result) return res.status(500).send(responseError);
    res.send({ status: "success", result });
}

export default { getUsers, getUsersById, saveUser };