import RouterBase from "./router.js";

class User_router extends RouterBase {
    init() {
        this.get("/", (req, res) => {
            res.sendSuccess("Hola Coders! ");
        });

        this.get("/test", (req, res) => {
            res.sendClientError("Prueba Error!");
        });
    }
}

export default User_router;