import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
import Products from "../../../../models/Product";
import {verifyUser} from "../../../../middlewares/authMiddleware";
const handler = async (req, res) => {
  const {method, cookies} = req;
  dbConnect();

  if (method === "GET") {
    try {
      const allCartItems = await CartItems.find({user: req.user.id}).populate([
        "product",
      ]);
      return res.status(200).json(allCartItems);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const {product, quantity} = req.body;
      //checking existing quantity
      let productInWarehouse = await Products.findById(product);
      if (productInWarehouse.Quantity < quantity) {
        return res.send(
          "requested quantity can not more than present products quantity"
        );
      }

      let existing = await CartItems.findOne({product, user: req.user.id});
      if (existing) {
        await CartItems.updateOne(
          {product, user: req.user.id},
          {$set: {quantity: existing.quantity + quantity}},
          {new: true}
        );
      } else {
        await CartItems.create({user: req.user.id, product, quantity});
      }
      // console.log(product);
      res.status(201).json("item has been updated in cart.");
    } catch (error) {
      res.status(500).json(error.message);
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
};
export default verifyUser(handler);
