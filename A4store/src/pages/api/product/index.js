import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";

export default async function handler(req, res) {

  const {method} = req;
  const category = req.query;
  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find(category || {});
      // console.log(products);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);

    }
  }
}
