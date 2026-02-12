import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productname:{
        type:String,
        required:[true,"product name is required"]

    },
    price:{
        type:Number,
        required:[true,"product price is required"]
    },
    brand:{
        type:String,
        required:[true,"product brand is required"]
    }
},{
    strict:"throw",
    timeseries:true,
    versionKey:false
})

//export
export const ProductModel=model("product",productSchema)  // name 