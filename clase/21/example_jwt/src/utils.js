import jwt from 'jsonwebtoken';


const PRIVATE_KEY = "CoderKeySecretShh";


const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: "2h" })
    return token;
}

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).send({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        
        if (error) {
            return res.status(403).send({ error: "Not authenticated" });
        }

        req.user = credentials.user;
        next();
    });

};

export {
    generateToken,
    authToken
}