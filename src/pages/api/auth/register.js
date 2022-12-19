import auth from "../../../../models/auth";
import dbConnect from "../../../../utils/mongo";
import bcrypt from "bcrypt"
const handler = async (req, res) => {
  const {method} = req;
  dbConnect();

  if (method === "POST") {
    const user = req.body;
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);
      const CreateUser = new auth({
        name: user.name,
        email: user.email,
        password: hash,
      });
      await CreateUser.save();
      return res.status(201).json("Registered Successfully");
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};

export default handler;
