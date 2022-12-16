import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
export default async function handler(req, res) {
  const {
    method,
    query: {id, q},
  } = req;

  await dbConnect();

  if (method === "PATCH") {
    try {
      const existing = await CartItems.findById(id);
      if (q === "add") {
        await CartItems.updateOne(
          {_id: id},
          {$set: {quantity: existing.quantity + 1}}
        );
      } else if (q === "remove") {
        await CartItems.updateOne(
          {_id: id},
          {$set: {quantity: existing.quantity - 1}}
        );
      }
      res.status(200).json("quantity has been updated successfully!");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === "DELETE") {
    try {
      const existing = await CartItems.findByIdAndDelete(id);
      res.status(200).json("Deleted successfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
