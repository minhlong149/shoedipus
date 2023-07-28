import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  price: Number,
  color: String,
});

shoeSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Shoes = mongoose.model("Shoes", shoeSchema);

export default Shoes;
