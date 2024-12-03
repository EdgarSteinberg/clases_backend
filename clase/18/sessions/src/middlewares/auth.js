function auth (req,res,next){
    const {username, password} = req.query;

    if(username !== "Edgar" || password !== "1234"){
        return res.send('Login Failed')
    }

    req.session.user = username;
    req.session.admin = true;

    return next();
}

export default auth;
