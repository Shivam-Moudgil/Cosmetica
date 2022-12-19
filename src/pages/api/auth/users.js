import auth from "../../../../models/auth";
import dbConnect from "../../../../utils/mongo";
import jwt from "jsonwebtoken";
import {verifyUser} from "../../../../middlewares/authMiddleware";
const handler = async (req, res) => {
  const {method, cookies} = req;
  dbConnect();

  // const token = cookies.OursiteJWT;

  if (method === "GET") {
    verifyUser(req, res);
    console.log(req.user, "jk");

    try {
      const users = await auth.find();
      // const {isAdmin}=users
      // console.log(isAdmin);
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
