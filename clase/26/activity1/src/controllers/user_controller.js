
class UserController{

    static users = [];

    async getAllUser(){
        return UserController.users;
    }

    async getUserById(uid){
        const user = UserController.users.filter(user => user.id == uid);

        if(user.length === 0) throw new Error(`Usuario no encontrado`);

        return user;
    }

    async createUser(user){
        const {first_name, last_name, email} = user;

        if(!first_name || !last_name || !email){
            throw new Error(`Error al crear los usuarios!`)
        }

        const newUser = {
            id: this.getId(),
            first_name,
            last_name,
            email
        }

        UserController.users.push(newUser);

        return newUser;
    }

    getId(){
        if(UserController.users.length > 0){
            return UserController.users[UserController.users.length - 1 ].id + 1;
        }
        return 1;
    }
}

export default UserController;