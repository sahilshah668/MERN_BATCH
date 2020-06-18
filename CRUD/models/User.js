const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = User = mongoose.model('user',UserSchema)