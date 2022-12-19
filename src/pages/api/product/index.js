import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";

export default async function handler(req, res) {

  const { method } = req;
  const { q } = req.query;
  dbConnect();

  if (method === "GET") {
    try {
      if(q) {
        let temp = new RegExp(q.substr(0, 4), "i");
        const products = await Product.find({ category: temp });
        return res.status(200).send(products);
      }

      const products = await Product.find({});
      return res.status(200).json(products);

    } catch ({message}) {
      return res.status(500).send(message);
    }
  }
}