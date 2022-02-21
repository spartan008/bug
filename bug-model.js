const mongoose = require("mongoose")


let BugSchema = new mongoose.Schema({
   
    bugName:{
        type:String
    },

    title:{
        type:String
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
        
    }
})

let BugModel = mongoose.model("bug",BugSchema)

module.exports = BugModel