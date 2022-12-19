import dbConnect from "../../../../utils/mongo";
import Order from "../../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id).populate(['product']);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const order = await Order.findByIdAndDelete(id)
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
