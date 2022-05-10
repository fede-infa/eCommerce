const passport = require('passport');
const {LocalStrategy} = require('passport-local');
const userModel = require('../dao/models/user')

module.exports = () =>{
    passport.use('login', 
        new LocalStrategy(function(username, password, done){
            userModel.findOne({username: username}, (err, user) =>{
                console.log('user', user);
            })
        }
    ))

    // SIGNUP
    passport.use('signup', new LocalStrategy(
        function(username, password, done){
            user
        }
    ))
}