const mongoose = require("mongoose")

let DevloperSchema = new mongoose.Schema({
    
    
    devloperName:{
        type:String
    },
     
    
    project :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },

   
        user :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        
        
    }
})

let DevloperModel = mongoose.model("devloper",DevloperSchema)

module.exports = DevloperModel