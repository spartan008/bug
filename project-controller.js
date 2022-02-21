const ProjectModel = require("../model/project-model")

module.exports.addProject = function (req,res) {
    
   let projectName = req.body.projectName 
   let title = req.body.title
   let estimatedHours = req.body.estimatedHours
   let startDate = req.body.startDate
   let completeDate = req.body.completeDate


   let project = new ProjectModel({

       projectName: projectName,
       title: title,
       estimatedHours: estimatedHours,
       startDate: startDate,
       completeDate: completeDate
   })

   project.save(function (err, data) {
    if (err) {
        res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
    } else {
        res.json({ msg: "projectadd done", data: data, status: 200 })//http status code 
    }
})
}
module.exports.getAllProjects = function (req, res) {
    ProjectModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"projects...",status:200,data:projects})

        }

    })


    
}

module.exports.deleteProject = function(req,res){
    //params userid 
    let projectId = req.params.projectId //postman -> userid 

    ProjectModel.deleteOne({_id:projectId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "project removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateProject = function(req,res){

    
    let projectId = req.body.projectId 
    let projectName = req.body.projectName 

    ProjectModel.updateOne({_id:projectId},{projectName:projectName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}