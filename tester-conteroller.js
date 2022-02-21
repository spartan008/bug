const TesterModel = require("../model/tester-model")


module.exports.addTester = function (req, res) {

    let testerName= req.body.testerName
    let project = req.body.project
    let user =req.body.user


    let tester = new TesterModel({
        testerName:testerName,  
        project:project,
        user:user
    })

    tester.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "tester add done", data: data, status: 200 })//http status code 
        }
    })


}

module.exports.getAllTesters = function (req, res) {

    TesterModel.find().populate("project").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "tester ret...", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.deleteTester = function(req,res){
    //params userid 
    let testerId = req.params.testerId //postman -> userid 

    TesterModel.deleteOne({_id:testerId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "tester removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateTester = function(req,res){

    
    let testerId = req.body.testerId 
    let testerName = req.body.testerName 

    TesterModel.updateOne({_id:testerId},{testerName:testerName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
