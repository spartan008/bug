const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const bugController = require("./controller/bug-controller")
const statusController = require("./controller/status-controller")
const projectController = require("./controller/project-controller")
const taskController = require("./controller/task-controller")
const devloperController = require("./controller/devloper-controller")
const testerController = require("./controller/tester-conteroller")





const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/bugtracking',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//bug
app.post("/bugs",bugController.addBug)
app.get("/bugs",bugController.getAllBugs)
app.delete("/bugs/:bugId",bugController.deleteBug)
app.put("/bugs",bugController.updateBug)


//project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllProjects)
app.delete("/projects/:projectId",projectController.deleteProject)
app.put("/projects",projectController.updateProject)

//status
app.post("/statuss",statusController.addStatus)
app.get("/statuss",statusController.getAllStatuss)
app.delete("/statuss/:statusId",statusController.deleteStatus)
app.put("/statuss",statusController.updateStatus)

//task
app.post("/tasks",taskController.addTask)
app.get("/tasks",taskController.getAllTasks)
app.delete("/tasks/:taskId",taskController.deleteTask)
app.put("/tasks",taskController.updateTask)

//devloper
app.post("/devlopers",devloperController.addDevloper)
app.get("/devlopers",devloperController.getAllDevlopers)
app.delete("/devlopers/:devloperId",devloperController.deleteDevloper)
app.put("/devlopers",devloperController.updateDevloper)


//tester
app.post("/testers",testerController.addTester)
app.get("/testers",testerController.getAllTesters)
app.delete("/testers/:testerId",testerController.deleteTester)
app.put("/testers",testerController.updateTester)



//server 
app.listen(3000,function(){
  console.log("server started on 3000");  
})