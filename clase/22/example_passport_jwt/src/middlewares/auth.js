

const authorization = (role) => {
    return async(req,res,next) => {

        if(!req.user) {
            return res.status(401).send({error : 'Unauthorization'});
        }

        if(req.user.role != role){
            if(!req.user) return res.status(401).send({error : 'Not permissions'});
        }

        next();
    }
}
export default authorization;