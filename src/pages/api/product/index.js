import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";
export default async function handler(req, res) {
  const {
    method,
    query: {id},
  } = req;

  await dbConnect();

  if (method == "GET") {
    try {
      const getData = await Product.find();
      res.status(200).json(getData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method == "POST") {
     try {
       const getData = new Product.find();
       await getData.save()
       res.status(200).json(getData);
     } catch (err) {
       res.status(500).json(err);
     }
  }
}
