import exp from 'express'
import { ProductModel } from '../models/productModel.js'
export const productApp=exp.Router()

//read products
productApp.get('/products',async(req,res)=>{
    let products= await ProductModel.find()
    console.log(products)
    res.status(200).json({message:"all products",payload:products})
})
//create product
productApp.post('/products',async(req,res)=>{
    let newProduct=req.body;
     let newProductDoc=new ProductModel(newProduct)
        //save in db
        await newProductDoc.save()
        res.status(200).json({message:"product created"})

})

//read by id
productApp.get('/products/:id',async(req,res)=>{
    //get obj id form url parameter
    let objId=req.params.id;
    //find user in database
    let productObj= await ProductModel.findById(objId)
    //send res
    res.status(200).json({message:"product",payload:productObj})
})


//update product

productApp.put("/products/:id",async(req,res)=>{
    //get objid from url
    let objId=req.params.id
    //get modified user from req
    let modifiedProduct=req.body;
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true})
    
    //send res
    res.status(200).json({message:"product modified",payload:latestProduct})

})

// delete product

productApp.delete("/products/:id",async(req,res)=>{
    //get object id
    let objId=req.params.id
    //delete user by id
    let deletedProduct=await ProductModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})