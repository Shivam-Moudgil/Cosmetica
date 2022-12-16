import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
import Products from "../../../../models/Product";
export default async function handler(req, res) {
  const {method} = req;
  dbConnect();

  if (method === "GET") {
      const { user } = req.body;
      console.log(user);
    try {
      const allCartItems = await CartItems.find({}).populate([
      "product"
      ])
      console.log(allCartItems);
      res.status(200).json(allCartItems);
      // const products = await CartItems.find();
      // console.log(products);
      // res.status(200).json(products);
      //    return res.status(200).json("hi carthere")
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
          { $set: { quantity: existing.quantity + quantity } },{new:true}
        );
      } else {
        await CartItems.create({user: user, product, quantity});
        }
        console.log(product);
      res.status(201).send("item has been updated in cart.");
    } catch (error) {
      res.send(error.message);
    }
  }
}
// if (method === "Delete") {
// }
