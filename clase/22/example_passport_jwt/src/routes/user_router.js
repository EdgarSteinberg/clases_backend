import {Router} from 'express';
import jwt from 'jsonwebtoken';
import passportCall from '../utils/authUtil.js';
import authorization from '../middlewares/auth.js';
import passport from 'passport';
const router = Router();

router.post('/login', (req,res) => {
    const {email, password} = req.body

    if(!email || !password){
      return res.status(401).send({status: 'Unauthorized'})
    }

    const token = jwt.sign({email, password, role: 'user'}, 'coderSecret', {expiresIn: '24h'});

    res.cookie('coderCookieToken', token, {maxAge: 60*60*1000}).send({status: 'success', message: 'Logged in!'});
});

router.get('/current', passportCall('jwt'), authorization('user'), (req,res) => {
    res.send(req.user)
})

/* router.get('/current', passportCall('jwt'), (req,res) => {
  res.send(req.user)
}) */

/* router.get('/current', passport.authenticate("jwt", {session: false}), (req,res) =>{
    res.send(req.user);
}) */
export default router;