const mongoose = require("mongoose")

let TaskSchema = new mongoose.Schema({
    
    
    taskName:{
        type:String
    },
     
    
    bug :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bug"
    },

    title:{
            type:String
        },
        status :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"status"
        
        
    }
})

let TaskModel = mongoose.model("task",TaskSchema)

module.exports = TaskModel