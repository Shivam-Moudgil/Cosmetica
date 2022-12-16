const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// LoginModel = mongoose.model("loginSchema", LoginSchema);
mongoose.models={}
export default mongoose.model("loginSchema", LoginSchema);;
