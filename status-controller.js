const StatusModel = require("../model/status-model")



module.exports.addStatus = function (req,res){
    
    console.log(req.body.statusName);
    
    let status = new StatusModel({
        statusName:req.body.statusName
    })

    status.save(function(err,success){
            if(err){
                console.log(err);
                //sendMailToDev(err);
                res.json({msg:"SMW",status:-1,data:req.body})

            }else{
                res.json({msg:"status added",status:200,data:success})
            }
    })
 }
   

 
module.exports.getAllStatuss = function(req,res){

    //role -> db --> select * from roles 
    //model 

    //REST 
    StatusModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"status...",status:200,data:statuss})

        }

    })

}
// /sdfdsfsdfdsf 
module.exports.deleteStatus = function(req,res){
    let statusId = req.params.statusId

    //delete from role where roleId = 1 
    StatusModel.deleteOne({"_id":statusId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}

module.exports.updateStatus = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let statusId = req.body.statusId 
    let statusName = req.body.statusName 

    StatusModel.updateOne({_id:statusId},{statusName:statusName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}