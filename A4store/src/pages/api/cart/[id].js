import dbConnect from "../../../../utils/mongo";
import CartItems from "../../../../models/Cart";
export default async function handler(req, res) {
  const {
    method,
    query: {id},
  } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const getData = await CartItems.findById(id);
      res.status(200).json(getData)
    } catch(err) {
      res.status(500).json(err)
  }
}


  if (method === "PATCH") {
    const {q} = req.query;
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
      console.log("here");
      const existing = await CartItems.findByIdAndDelete(id);
      res.status(200).json("Deleted succesfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
