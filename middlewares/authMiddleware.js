import jwt from "jsonwebtoken";

export const verifyUser = (req, res) => {
    const token = req.cookies.OursiteJWT;
  if (!token) return false

  jwt.verify(token, process.env.Secret_key, (err, user) => {
    if (err) return false

    req.user = user;
    return { req, res }
    });
  };

