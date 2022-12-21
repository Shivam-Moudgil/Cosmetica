import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
import Product from "../../../../models/Product";
export default async function handler(req, res) {
  const {
    method,
    query: {id},
  } = req;

  await dbConnect();

  if (method == "GET") {
        try {
      const getData = await CartItems.findById(id);
      res.status(200).json(getData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    const {q, prd_id} = req.body;
    // console.log("query", q);
    // console.log("id", prd_id);
    try {
      const existing = await CartItems.findById(id);
      const productex = await Product.findById(prd_id);
      // console.log(productex);
      if (q == "add") {
        await CartItems.updateOne(
          {_id: id},
          {$set: {quantity: existing.quantity + 1}},
          {new: true}
        );
        await Product.updateOne(
          {_id: prd_id},
          {$set: {qty: productex.qty - 1}},
          {new: true}
        );
      } else if (q == "remove") {
        await CartItems.updateOne(
          {_id: id},
          {$set: {quantity: existing.quantity - 1}},
          {new: true}
        );
        await Product.updateOne(
          {_id: prd_id},
          {$set: {qty: productex.qty + 1}},
          {new: true}
        );
      }
      res.status(200).json("quantity has been updated successfully!");
    } catch (error) {
      // console.log(error);
      res.status(500).json(error.message);
    }
  }

  if (method === "DELETE") {
    try {
      console.log("here");
      const existing = await CartItems.findByIdAndDelete(id);
      res.status(200).json("Deleted succesfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
