import { Schema,model } from "mongoose";
// create user schema (uname,pass,age)
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"user name is required"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[10,"maximum length exceeded"]
    }
    , 
    password:{
        type:String,
        required:[true,"password error"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"age should be above 18"],
        max:[50,"age should be below 50"]

    }

    

},{
    strict:"throw",
    timeseries:true
});

 

//create user model with that schema

export const UserModel = model("user",userSchema);   // the name is very import , that creates a collection in db  adds prular name 