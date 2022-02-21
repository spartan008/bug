const DevloperModel = require("../model/devloper-model")


module.exports.addDevloper = function (req, res) {

    let devloperName= req.body.devloperName
    let project = req.body.project
    let user =req.body.user


    let devloper = new DevloperModel({
        devloperName:devloperName,  
        project:project,
        user:user
    })

    devloper.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "devloper add done", data: data, status: 200 })//http status code 
        }
    })


}

module.exports.getAllDevlopers = function (req, res) {

    DevloperModel.find().populate("project").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "tdevloper ret...", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.deleteDevloper = function(req,res){
    //params userid 
    let devloperId = req.params.devloperId //postman -> userid 

    DevloperModel.deleteOne({_id:devloperId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "devloper removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateDevloper = function(req,res){

    
    let devloperId = req.body.devloperId 
    let devloperName = req.body.devloperName 

    DevloperModel.updateOne({_id:devloperId},{devloperName:devloperName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
