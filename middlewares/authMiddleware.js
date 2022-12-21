import jwt from "jsonwebtoken";

export const verifyUser = (handler) => {
  return async (req, res) => {
    const token = req.cookies.OursiteJWT;
    if (!token) return res.status(401).json("You are not Authenticated");

    jwt.verify(token, process.env.Secret_key, (err, user) => {
      if (err) return res.status(404).json("Invalid Token!");

      req.user = user;
      return handler(req, res);
    });
  };
};
