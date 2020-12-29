const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
})

UserSchema.statics.authenticate = (email,password,cb)=>{
    User.findOne({email})
        .exec((err,user)=>{
            if(err) return cb(err)
            else if(!user){
                let err = new Error('User Not Found!')
                err.status = 401
                return cb(err)
            }
            if(password!=user.password){
                let err = new Error('Password doesnt match!')
                err.status = 401
                return cb(err)
            }
            return cb(null,user)
        })
}

const User = mongoose.model('User',UserSchema)
module.exports = User