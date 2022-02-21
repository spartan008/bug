const mongoose = require("mongoose")



let ProjectSchema = new mongoose.Schema({
   
    projectName:{
        type:String
    },

    title:{
        type:String
    },

    estimatedHours:{
        type:Number
    },
    startDate:{
        type:Date
    },
    completeDate:{
        type:Date
        
    }
})

let ProjectModel = mongoose.model("project",ProjectSchema)

module.exports = ProjectModel