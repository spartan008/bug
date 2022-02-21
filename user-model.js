const mongoose = require("mongoose")


let UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
})

let UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel