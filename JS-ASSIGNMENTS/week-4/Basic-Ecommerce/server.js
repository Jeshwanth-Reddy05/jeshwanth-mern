import exp from "express";
import { connect } from "mongoose";
import { productApp } from "./APIs/ProductApi.js";
import { userApp } from "./APIs/UserApi.js";

//create http server
const app = exp();
//assign a port number
let port = 5000;

async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/E-commerce"); //returns a promise
    console.log("Database connection sucess");

    app.listen(port, () => console.log("server listening on port 5000"));
  } catch (err) {
    console.log("not connectd ", err);
  }

  // .then(()=>console.log("connected"))
  // .catch((err)=>console.log("cant connect",err))
}
connectDB();

app.use(exp.json());
app.use("/product-api", productApp);
app.use("/user-api", userApp);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "error", reason: err.message });
});
