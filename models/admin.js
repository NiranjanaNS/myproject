import mongoose from "mongoose";
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String,
     required: true
     }
});

const adminUser = mongoose.model("addUserInfo", user);

export default adminUser;
