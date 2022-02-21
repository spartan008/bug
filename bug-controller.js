const BugModel = require("../model/bug-model")

module.exports.addBug = function (req,res) {
    
   let bugName = req.body.bugName 
   let title = req.body.title
   let startDate = req.body.startDate
   let endDate = req.body.endDate


   let bug = new BugModel({
       bugName: bugName,
       title: title,
       startDate: startDate,
       endDate: endDate
   })

   bug.save(function (err, data) {
    if (err) {
        res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
    } else {
        res.json({ msg: "budadd done", data: data, status: 200 })//http status code 
    }
})
}
module.exports.getAllBugs = function (req, res) {
    BugModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"bugs...",status:200,data:roles})

        }

    })


    
}

module.exports.deleteBug = function(req,res){
    //params userid 
    let budId = req.params.bugId //postman -> userid 

    BugModel.deleteOne({_id:bugId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "bug removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateBug = function(req,res){

    
    let bugId = req.body.bugId 
    let bugName = req.body.bugName 

    BugModel.updateOne({_id:bugId},{bugName:bugName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}