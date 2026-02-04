import { Schema,model } from "mongoose";
//create product schema with rules
const productSchema=new Schema({
    productName:{
    type:String,
    required:[true,"user name is required"]
        
    },
    price:{
        type:Number,
        required:[true,"price is not mentioned"]
    }

    ,
    brand:{
        type:String,
        required:[true,"name of the brand"]

    }


})
export const ProductModel=model("product",productSchema)// it creates a collection with productSchema in db