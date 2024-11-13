class UserManager {
    constructor() {
        this.users = [];
    }

    async getAllUsers() {
        return this.users;
    }

    async createUser(user) {
        const newUser = {
            id: await this.getId(),
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            course: user.course // Corrección aquí
        };

        this.users.push(newUser);
        return "Usuario Creado Correctamente";
    }

    async getId() {
        const users = await this.getAllUsers();

        if (users.length > 0) { // Corrección aquí
            return users[users.length - 1].id + 1; // Corrección aquí
        }
        return 1;
    }
}

export default UserManager;