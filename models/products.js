import mongoose from "mongoose";
const prod = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
//   category: {
//     type: Array,
//     required: true,
//   },
  description: {
    type: String,
    required: true,
  }
});

const prodDet = mongoose.model('Products', prod)

export default prodDet;