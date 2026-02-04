//create HTTP server
// import express module

import exp from 'express'
import { userApp } from './APIs/user-api.js';
import { productApp } from './APIs/product-api.js';
//create server
const app=exp() 

//assign port number
app.listen(3000,()=>console.log("HTTp srver listing on port 3000..."))

//body parsin middleware
app.use(exp.json()); 


//create a custom middleware
// function middleware1(req,res,next){
//     console.log("middleware 1 is working ")
//     //send resp
//     //res.json({mesaage:"response from middleware"})
//     next(); // forward
// }
// // to execute for every incomming req (get post put ..)


// function middleware2(req,res,next){
//     console.log("middleware 2 is working ")
   
//     next(); // forward
// }

// //app.use(middleware2)
// app.use(middleware1)

// create API(request handlers - route )
//test local in-memory data

app.use("/user-api",userApp);
app.use("/product-api",productApp)
// app.use('product-api',productApp)





