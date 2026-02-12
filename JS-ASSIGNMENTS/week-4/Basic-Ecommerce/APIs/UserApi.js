import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ProductModel } from "../models/ProductModel.js";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
export const userApp = exp.Router();

//craete user
userApp.post("/users", async (req, res) => {
  //get the user
  let newUser = req.body;
  //validate method can be called on the document
  await new UserModel(newUser).validate(); // mongoose trap
  //hash the password
  let hashedPassword = await hash(req.body.password, 10);
  //replace it with old one
  newUser.password = hashedPassword;
  // create new user
  let newUserDocument = new UserModel(newUser);
  //save in database
  await newUserDocument.save({ validateBeforeSave: false }); //default it is true it is used to bypass
  //send response
  res.status(201).json({ message: "user created" });
});

//add product to users cart

// userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
//   //read user id and product id from url parameter
//   let { uid, pid } = req.params; //{uid:"" , pid:""}
//   console.log("uid", uid);
//   console.log("pid", pid);
//   //check user
//   let user = await UserModel.findById(uid);
//   if (!user) {
//     return res.status(401).json({ message: "user not found !" });
//   }

//   //check product
//   let product = await ProductModel.findById(pid);
//   if (!product) {
//     return res.status(401).json({ message: "product not found !" });
//   }
//   //perform update
//   let modifiedUser = await UserModel.findByIdAndUpdate(
//     uid,
//     { $push: { cart: { product: pid } } },
//     { new: true },
//   )//.populate("cart.product");
//   //response
//   res
//     .status(200)
//     .json({ message: "product added to cart ", payload: modifiedUser });
// });

//read user by id
userApp.get("/users/:uid", async (req, res) => {
  //read user id
  let { uid } = req.params;
  //find user
  let userObj = await UserModel.findById(uid).populate("cart.product");
  res.status(200).json({ message: "user ", payload: userObj });
});

//add quantity  using toString method
userApp.put("/user-cart/user-id/:uid/product-id/:pid/", async (req, res) => {
  //read user id and product id from url parameter
  let { uid, pid } = req.params; //{uid:"" , pid:""}
  console.log("uid", uid);
  console.log("pid", pid);

  //check user
  let user = await UserModel.findById(uid);
  if (!user) {
    return res.status(401).json({ message: "user not found !" });
  }

  //check product
  let product = await ProductModel.findById(pid);
  if (!product) {
    return res.status(401).json({ message: "product not found !" });
  }

  let quant;
  const item = user.cart.find(
    (item) => item.product._id.toString() === pid.toString(),
  );
  // we can convert to mongoose.Type.ObjectId instead of tostring
  // const item = user.cart.find(
  //     (item) => item.product._id.toString() === new mongoose.Type.ObjectId(pid),
  // );

  if (!item) {
    console.log("Product not available in cart");
    let modifiedUser = await UserModel.findByIdAndUpdate(
      uid,
      { $push: { cart: { product: product, Quantity: 1 } } },
      { new: true, runValidators: true },
    ).populate("cart.product");

    res
      .status(200)
      .json({ message: "product added successfull", payload: modifiedUser });
  } else {
    console.log("Product available in cart");
    quant = item.Quantity + 1;
    let modifiedUser = await UserModel.findByIdAndUpdate(
      user,
      { $set: { cart: { product: product, Quantity: quant } } },
      { new: true, runValidators: true },
    ).populate("cart.product");
    res
      .status(200)
      .json({ message: "product added successfull", payload: modifiedUser });
  }
});


