import RouterBase from "./router.js";
import jwt from 'jsonwebtoken';

class Session_router extends RouterBase {
    init() {
        this.post("/login",["PUBLIC"],(req, res) => {
            const { name , email, role} = req.body;

            const token = jwt.sign({name, email, role}, "CoderSecret");


            res.sendSuccess(token);
        });

      
    }
}

export default Session_router;