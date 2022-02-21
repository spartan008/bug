const TaskModel = require("../model/task-model")


module.exports.addTask = function (req, res) {

    let taskName= req.body.taskName
    let bug = req.body.bug
    let status =req.body.status


    let task = new TaskModel({
        taskName:taskName,  
        bug:bug,
        status:status
    })

    task.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "task add done", data: data, status: 200 })//http status code 
        }
    })


}

module.exports.getAllTasks = function (req, res) {

    TaskModel.find().populate("bug").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "tasks ret...", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.deleteTask = function(req,res){
    //params userid 
    let taskId = req.params.taskId //postman -> userid 

    TaskModel.deleteOne({_id:taskId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "task removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateTask = function(req,res){

    
    let taskId = req.body.taskId 
    let taskName = req.body.taskName 

    TaskModel.updateOne({_id:taskId},{taskName:taskName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
