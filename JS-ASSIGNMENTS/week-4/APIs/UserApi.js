import exp from "express";
import { UserModel } from "../models/userModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "./middlewares/verifyToken.js";

export const userApp = exp.Router();

//test rote
// userApp.get("/test",(req,res)=>{
//     res.json({message:"running"})
// })

//user api router

//read all user
userApp.get("/users", async (req, res) => {
  //read users from db
  let users = await UserModel.find(); //{},{username:1,_id:0}
  res.status(200).json({ message: "all users", payload: users });
});

//create user
userApp.post("/users", async (req, res) => {
  //get newuser from req
  let newUser = req.body;
  // hash the password
  let hashedPassword = await hash(req.body.password, 12);
  //repalce the old password to hashed password
  newUser.password = hashedPassword;
  // console.log(newUser)
  //create new user
  let newUserDoc = new UserModel(newUser);
  //save in db
  await newUserDoc.save();
  res.status(200).json({ message: "user created" });
});

//read user by object id

userApp.get("/users/:id", async (req, res) => {
  //get obj id form url parameter
  let objId = req.params.id;
  //find user in database
  let userObj = await UserModel.findById(objId);
  //send res
  res.status(200).json({ message: "user", payload: userObj });
});

//update user

userApp.put("/users/:id", async (req, res) => {
  //get objid from url
  let objId = req.params.id;
  //get modified user from req
  let modifiedUser = req.body;
  let latestUser = await UserModel.findByIdAndUpdate(
    objId,
    { $set: { ...modifiedUser } },
    { new: true, runValidators: true },
  );

  //send res
  res.status(200).json({ message: "user modified", payload: latestUser });
});

// delete user

userApp.delete("/users/:id", async (req, res) => {
  //get object id
  let objId = req.params.id;
  //delete user by id
  let deleteduser = await UserModel.findByIdAndDelete(objId);
  //send res
  res.status(200).json({ message: "user deleted", payload: deleteduser });
});

//user athentication(login) route
userApp.post("/auth", async (req, res) => {
  //get user
  let userCred = req.body;
  //check for username
  let userOfDB = await UserModel.findOne({ username: userCred.username });
  //if user not found
  if (userOfDB === null) {
    return res.status(404).json({ message: "invalid username" });
  }
  //compare password
  let status = await compare(userCred.password, userOfDB.password);
  //if password match
  if (status === false) {
    return res.status(404).json({ message: "invalid username" });
  }
  //create signed token and send
  let signedToken = jwt.sign({ username: userCred.username }, "abcdef", {
    expiresIn: 30,
  }); //(abcdef)at the time of login this secret key is used
  //save the token as httponly
  res.cookie("token", signedToken, {
    httpOnly: true, // it is http only key
    secure: false,
    sameSite: "lax",
  });
  //send token in response
  res.status(200).json({ message: "login sucess" });
});

//test route(protected)
userApp.get("/test", verifyToken, (req, res) => {
  res.json({ message: "test route" });
});
