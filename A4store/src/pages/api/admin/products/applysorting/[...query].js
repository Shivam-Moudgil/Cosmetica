import dbConnect from "../../../../../../utils/mongo";
import Product from "../../../../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;
    const query = req.query;
    const { quantity, price, rating, page = 1, limit = 15, category, name } = query;
    if (method === "GET") {
        let products;
        try {
            await dbConnect();
            let allProducts = await Product.find()
            products = await Product.find().sort({
                qty: quantity === 'asc' ? 1 : -1,
                price: price === 'asc' ? 1 : -1,
                ratingcount: rating === 'asc' ? 1 : -1
            }).limit(limit).skip((page - 1) * limit);

            if (category && name) {
                const regex = new RegExp(name, "i");
                if (name === 'category') {
                    products = await Product.find({ category: regex }).limit(limit).skip((page - 1) * limit);
                } else {
                    products = await Product.find({ name: regex }).limit(limit).skip((page - 1) * limit);
                }
            }
            res.status(200).json({
                products,
                length: allProducts.length
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}