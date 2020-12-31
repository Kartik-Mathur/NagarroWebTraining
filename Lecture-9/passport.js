const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/user')

passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },
    function(email,password,done){
        console.log("Inside local strategy")
        User.findOne({email},(err,user)=>{
            if(err) return done(err)
            if(!user) return done(null,false)
            if(user.password != password){
                return done(null,false)
            }
            return done(null,user)
        })
    }
))

passport.use(new FacebookStrategy({
    clientID: '410198860101092',
    clientSecret: '3f5bba63673e54f6efc24fef7fe9ffa5',
    callbackURL: "http://localhost:4444/login/facebook/callback"
  },
  async (token, rt, profile, cb) =>{
    console.log(token)
    console.log(profile)
    let user = await User.findOne({
        fbID: profile.id
    })
    if(user) return cb(null,user)
    user = await User.create({fbID:profile.id, fbToken:token, name:profile.displayName})
    return cb(null,user)
  }
))

// Convert user to user.id
passport.serializeUser((user,cb)=>{
    console.log('Serialize user')
    cb(null,user.id)
})

// deserialize
passport.deserializeUser((user,cb)=>{
    console.log('Deserialize user')
    User.findOne({user:user.id},(err,user)=>{
        if(err) return cb(err)
        console.log("User after deserialization ",user)
        return cb(null,user)
    })
})

module.exports = passport