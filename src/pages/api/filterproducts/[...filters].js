import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
    const { category, typeOfSort, price, avgReview, limit = 25, page = 1 } = req.query;
    console.log(category, price, typeOfSort, avgReview);
    try {
        if (req.method === 'GET') {
            await dbConnect();
            let length;
            let products = await Product.find({ category }).limit(limit).skip((page - 1) * limit)
            if (typeOfSort === 'asc' || typeOfSort === 'desc') {
                products = await Product.find({ category }).sort({ price: typeOfSort === 'asc' ? 1 : -1 }).limit(limit).skip((page - 1) * limit)
            } else if (typeOfSort === 'alpSort') {
                products = await Product.aggregate([{ $project: { name: 1, rating: 1, image: 1, category: 1, price: 1, ratingcount: 1, updatedAt: 1 } }, { $sort: { name: 1 } }, { $limit: limit }, { $skip: (page - 1) * limit }])
            } else if (typeOfSort === 'rating') {
                products = await Product.find({ category }).sort({ rating: -1 }).limit(limit).skip((page - 1) * limit)

            } else if (price) {
                products = await Product.find({ price: { $lte: +price } }).limit(limit).skip((page - 1) * limit)

            } else if (avgReview) {
                let [s, e] = avgReview.split('-')
                products = await Product.find({ $and: [{ rating: { $gte: +s } }, { rating: { $lte: +e } }] }).limit(limit).skip((page - 1) * limit)
            }
            let prod = await Product.find({ category })
            length = prod.length;
            return res.status(200).json({
                products,
                length,
            });
        } else {
            res.status(500).json({
                status: 0,
                message: 'wrong request method!'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}