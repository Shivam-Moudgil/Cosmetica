import jwt from "jsonwebtoken";
import next from "next";

export const verifyUser = (req,res) => {
//   const {cookies} = req;

  const token = req.cookies.OursiteJWT;
   if (!token) return res.status(401).json("You are not Authenticated");

   jwt.verify(token, process.env.Secret_key, (err, user) => {
     if (err) return res.status(404).json("Invalid Token!");
       req.user = user;
       console.log(req.user)
       return req.user
   });
};
