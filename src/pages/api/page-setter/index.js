import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";
// const Redis = require("ioredis");
import Redis from "ioredis";

const redis = new Redis({
  port: 11286, // Redis port
  host: "redis-11286.c301.ap-south-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "YzblQnEnQtV3GuTy4rV7EpgFNma2pdck",
  db: 0, // Defaults to 0
});

export default async function handler(req, res) {
  dbConnect();

  if (req.method === "GET") {
    try {
      redis.get("pageID", async (err, pageID) => {
        const product = await Product.findOne({ _id: pageID });
        return res.status(200).send(product);
      })
    }
    catch ({ message }) {
      return res.status(500).send(message);
    }
  }

  else if (req.method === "POST") {
    try {
      redis.set("pageID", req.body._id);

      return res.status(200).send("Page set!!!")
    }
    catch ({ message }) {
      return res.status(500).send(message);
    }
  }
}