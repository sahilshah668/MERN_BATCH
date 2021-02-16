const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = Task = mongoose.model('tasks',taskSchema)