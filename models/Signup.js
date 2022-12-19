const mongoose = require("mongoose");

const SignupSchema = mongoose.Schema({
  name: String,
  email: String,
  confirmemail: String,
  password: String,
  confirmpassword: String,
  number: Number,
  referal: String,
});

// SignupModel = mongoose.model("signupSchema", SignupSchema);

// module.exports = SignupModel;

mongoose.models={}
export default mongoose.model("signupSchema", SignupSchema);;

