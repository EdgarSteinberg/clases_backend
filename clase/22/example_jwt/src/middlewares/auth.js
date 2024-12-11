import jwt from 'jsonwebtoken';

function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: 'Not authenticated'
        });
    }
    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token, 'CoderSecretPass', (error, credentiales) => {
        if (error) {
            return res.status(403).send({
                message: 'Not authenticated'
            });
        }
        req.user = credentiales;
        console.log(req.user)
        next()
    })
}
export default auth;