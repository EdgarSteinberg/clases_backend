import passport from 'passport';
import local from 'passport-local';

import userModel from '../models/user_model.js';
import { create_hash, isValid_password } from '../utils/functionsUtils.js';

const localStrategy = local.Strategy;
const initializePassport = () => {

    passport.use('register', new localStrategy(
        {
            passReqToCallback: true,
            usernameField: 'email'
        },
        async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body;

            try {
                let user = await userModel.findOne({ email: username });
                if (user) {
                    console.log("User already exists!");
                    return done(null, false);
                }

                const newUser = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: create_hash(password)
                };

                const result = await userModel.create(newUser);

                return done(null, result);
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.use('login', new localStrategy(
        {
            usernameField: 'email'
        },
        async (username, password, done) => {
            try {
                const user = await userModel.findOne({ email: username });
                if (!user) {
                    const errorMessage = "User does not exist!"
                    console.log(errorMessage);
                    return done(errorMessage);
                }

                if (!isValid_password(user, password)) {
                    return done(null,false)
                }

                return done(null, user);
            } catch (error) {
                console.log(error.message);
                return done(error.message);
            }
        }
    ));


    passport.serializeUser((user, done) => { done(null, user.id) });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    })
};

export default initializePassport; // ✅ Asegúrate de exportar la función.
