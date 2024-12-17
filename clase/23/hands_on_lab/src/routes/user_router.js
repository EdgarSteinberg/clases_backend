import RouterBase from "./router.js";

class User_router extends RouterBase {
    init() {
        this.get("/", ["PUBLIC"], (req, res) => {
            res.sendSuccess("Hola Coders! ");
        });

        this.get("/private", ["ADMIN", "USER_PREMIUM"], (req, res) => {
            res.sendSuccess(`Bienvenido ${req.user.name}!`);
        });


        this.get("/current", ["USER", "USER_PREMIUM"], (req, res) => {
            res.sendSuccess(req.user);
        });
    }
}

export default User_router;