import { Schema, model } from "mongoose";

//create cart schema
const cartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "product", // name of product model  (reference)
  },
  Quantity: {
    type: Number,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
  cart: {
    type: [cartSchema],
  },
});
export const UserModel = model("user", userSchema);
