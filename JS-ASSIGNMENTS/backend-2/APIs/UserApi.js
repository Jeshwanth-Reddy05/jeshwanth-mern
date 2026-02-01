import exp from 'express'
import { UserModel } from '../models/userModel.js' 
export const userApp=exp.Router()

// //test rote
// userApp.get("/test",(req,res)=>{
//     res.json({message:"running"})
// })


//user api router 


//read all user
userApp.get('/users',async(req,res)=>{
    //read users from db
   let users= await UserModel.find()
   res.status(200).json({message:"all users",payload:users})

})

//create user 
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    // console.log(newUser)
    //create new user
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    res.status(200).json({message:"user created"})
})

//read user by object id

userApp.get('/users/:id',async(req,res)=>{
    //get obj id form url parameter
    let objId=req.params.id;
    //find user in database
    let userObj= await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//update user

userApp.put("/users/:id",async(req,res)=>{
    //get objid from url
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body;
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})

})

// delete user

userApp.delete("/users/:id",async(req,res)=>{
    //get object id
    let objId=req.params.id
    //delete user by id
    let deleteduser=await UserModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"user deleted",payload:deleteduser})
})

