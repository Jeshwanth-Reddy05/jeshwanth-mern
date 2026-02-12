import exp from 'express'
import { ProductModel } from '../models/ProductModel.js';
export const productApp=exp.Router()


//route to create new product
productApp.post("/products",async(req,res)=>{
    //read or get 
    let productObj=req.body;
    //create product document
    let productDocument=new ProductModel(productObj)
    //save the doc
    await productDocument.save();
    //send res
    res.status(200).json({message:"product created"})
})

