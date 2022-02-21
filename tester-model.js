const mongoose = require("mongoose")

let TesterSchema = new mongoose.Schema({
    
    
    testerName:{
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

let TesterModel = mongoose.model("tester",TesterSchema)

module.exports = TesterModel