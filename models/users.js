import mongoose from "mongoose";
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Disable'
  },
  status: {
    type: String, 
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }
});


const useVar = mongoose.model("userInfo", user);

export default useVar;
