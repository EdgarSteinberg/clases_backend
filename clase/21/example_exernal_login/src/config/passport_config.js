import passport from "passport";
import GitHubStrategy from 'passport-github2';
import userModel from "../models/usermodel.js";


/*
App ID: 1082118
Client ID: Iv23ligWpUa9WiKKxB3e
ClientSecret: 7154a3fe95b076d255fc3906de947b99d72d42ba
*/

const initializatePassport = () => {

    const CLIENT_ID = "Iv23ligWpUa9WiKKxB3e";
    const SECRET_ID = "7154a3fe95b076d255fc3906de947b99d72d42ba";

    passport.use(
        'github',
        new GitHubStrategy({
            clientID: CLIENT_ID,
            clientSecret: SECRET_ID,
            callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
        },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    console.log(profile);
                    let user = await userModel.findOne({ username: profile._json.login })
                    if (!user) {
                        let newUser = {
                            username: profile._json.login,
                            name: profile._json.name,
                            password: ""
                        }
                        let result = await userModel.create(newUser);
                        done(null, result);
                    } else {
                        done(null, user);
                    }
                } catch (error) {
                    return done(error);
                }
            }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        console.log("Deserializing user with ID:", id); 
        let user = await userModel.findById(id);
        done(null, user);
    });
};

export default initializatePassport;