import exp from 'express'
import { userApp } from './APIs/UserApi.js'
import { productApp } from './APIs/ProductApi.js'
import {connect} from 'mongoose'

const app=exp()
app.use(exp.json())

const port=4000

//connect to db server  it usses mongodb protocol


async function connectDB(){
    try{

    
   await connect('mongodb://localhost:27017/anuragdb2') //returns a promise
   console.log("Database connection sucess")

   app.listen(port,()=>console.log('server listening on port 4000'))
    }catch(err){
        console.log("not connectd ",err)
    }
 
    // .then(()=>console.log("connected"))
    // .catch((err)=>console.log("cant connect",err))
}

connectDB()

app.use('/user-api',userApp)
app.use('/product-api',productApp)

// error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})
