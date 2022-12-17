import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
import Products from "../../../../models/Product";
export default async function handler(req, res) {
  const {method} = req;
  dbConnect();

  if (method === "GET") {
    try {
      const allCartItems = await CartItems.find({}).populate(["product"]);
      res.status(200).json(allCartItems);
    } catch (error) {
      return res.json(error);
    }
  }

  if (method === "POST") {
    const {product, quantity, user} = req.body;
    try {
      //checking existing quantity
      let productInWarehouse = await Products.findById(product);
      if (productInWarehouse.Quantity < quantity) {
        return res.send(
          "requested quantity can not more than present products quantity"
        );
      }

      let existing = await CartItems.findOne({product, user: user});
      if (existing) {
        await CartItems.updateOne(
          {product, user: user},
          {$set: {quantity: existing.quantity + quantity}},
          {new: true}
        );
      } else {
        await CartItems.create({user: user, product, quantity});
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
