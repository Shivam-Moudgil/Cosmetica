import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
import Products from "../../../../models/Product";
import { verifyUser } from "../../../../middlewares/authMiddleware";
export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();

  // const token = cookies.OursiteJWT;

  //  if (!token) {
  //    return res.status(401).json("You are not Authenticated/ Please login first");
  //  }

  if (method === "GET") {
    verifyUser(req, res)
    try {
      const allCartItems = await CartItems.find({ user: req.user.id }).populate([
        "product",
      ]);
      return res.status(200).json(allCartItems);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  if (method === "POST") {
    verifyUser(req, res);
    const { product, quantity } = req.body;
    try {
      //checking existing quantity
      let productInWarehouse = await Products.findById(product);
      if (productInWarehouse.Quantity < quantity) {
        return res.send(
          "requested quantity can not more than present products quantity"
        );
      }

      let existing = await CartItems.findOne({ product, user: req.user.id });
      if (existing) {
        await CartItems.updateOne(
          { product, user: req.user.id },
          { $set: { quantity: existing.quantity + quantity } },
          { new: true }
        );
      } else {
        await CartItems.create({ user: req.user.id, product, quantity });
      }
      // console.log(product);
      res.status(201).send("item has been updated in cart.");
    } catch (error) {
      res.send(error.message);
    }
  }

  if (method === "DELETE") {
    try {
      const orders = await CartItems.deleteMany({});
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
