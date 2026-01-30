import exp from "express";

// create a mini express application
export const productApp = exp();

// in-memory products array
let products = [];

// get req handling route (read products)
productApp.get('/products', (req, res) => {
  // send response
  res.status(200).json({ message: "all products", payload: products });
});

// post req handling route (add product)
productApp.post('/products', (req, res) => {
  // get product resource from req
  let newProduct = req.body;
  console.log("new product", newProduct);

  // insert new product into products array
  products.push(newProduct);

  // send response
  res.json({ message: "product added successfully", payload: newProduct });
});

// put req handling route (update product)
productApp.put('/products', (req, res) => {
  // get modified product from client
  let modifiedProduct = req.body;

  // find the product with id exists in array
  let productIndex = products.findIndex(productObj => productObj.id === modifiedProduct.id);

  // if product not found, send res as product not found
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // replace product with modified one
  products.splice(productIndex, 1, modifiedProduct);

  // send res as modified
  res.status(200).json({ message: "product modified", payload: modifiedProduct });
});

// product by id

productApp.get('/products-id/:id', (req, res) => {
  // read id from parameter
  //console.log(req.params); // return an object key value pair
  let pid = Number(req.params.id);
  // read user by this id
  let productsById = products.filter((product )=> product.productId=== pid);
  

  if (!productsById) {
    return res.status(404).json({ message: "product not found" });
  }

  // send res
  res.status(200).json({ message: "product", payload: productsById });
});


//product by brand

productApp.get('/products-brand/:brand',(req,res)=>{
   let pbrand=req.params.brand.toLowerCase();
   let productByBrand=products.filter((product)=>product.brand.toLowerCase()===pbrand)
   if(!productByBrand || productByBrand?.length===0){
      return res.status(404).json({message:"not found brand"})
   }
   res.status(202).json({message:"product found ",payload:productByBrand})
})


// delete product by id 

productApp.delete('/products/:id',(req,res)=>{
   let pid=Number(req.params.id)
   let productindex=products.findIndex((productObj)=>productObj.productId===pid)
   if(productindex===-1){
      return res.status(404).json({message:"product not available "})
   }
   let deletedProduct=products.splice(productindex,1);
   return res.status(200).json({message:"producted deleted :",payload:deletedProduct})
})




