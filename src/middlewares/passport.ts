import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt'
const globals = require('../config/globals');
const userModel = require('../dao/models/user');


const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: globals.JWT_TOKEN,

}

export default new Strategy(options, async(payload, done) =>{
    const user = await userModel.findById(payload._id)
    if(user){
        return done(null, user)
    } 
    return done(null, false);
})