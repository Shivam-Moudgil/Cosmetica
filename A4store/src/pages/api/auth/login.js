
import {sign} from "jsonwebtoken";
import {serialize} from "cookie";
import dbConnect from "../../../../utils/mongo";
import bcrypt from "bcrypt";
import auth from "../../../../models/auth";
const secret = process.env.Secret_key;

const handler = async (req, res) => {
  const {method} = req;
  dbConnect();

  if (method === "POST") {
    const user = req.body;
    try {
      const gotUser = await auth.findOne({
        email: user.email,
      });
      // console.log(findLogin);
      if (gotUser == null) return res.status(404).json("User not found");
      const isPassword = await bcrypt.compare(user.password, gotUser.password);
      if (!isPassword)
        return res.status(404).json("Please check your credentials again !");

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
          id: gotUser._id,
        },
        secret
      );

      const serialised = serialize("OursiteJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);

      res
        .status(200)
        .json("Logged in");
        
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};

export default handler;

