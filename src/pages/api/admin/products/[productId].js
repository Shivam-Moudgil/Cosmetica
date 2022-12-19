import dbConnect from "../../../../../utils/mongo";
import Product from "../../../../../models/Product";
import verifyAdmin from '../../../../../middlewares/verifyAdmin'

const handler = async (req, res) => {
    const { productId } = req.query;
    try {
        await dbConnect()
        if (req.method === "GET") {
            let product;
            if (productId) {
                product = await Product.findOne({ _id: productId })
            }
            return res.json(product)
        }

        if (req.method === 'DELETE') {
            let response;
            if (productId) {
                response = await Product.findByIdAndDelete(productId)
            }
            return res.json(response)
        }

        if (req.method === 'PATCH') {
            const { name, category, image, totalPrice, quantity } = req.body;
            let response;
            if (productId) {
                response = await Product.updateOne({ _id: productId }, { $set: { name, image, category, qty: quantity, price: totalPrice } })
            }
            return res.json(response)
        }
        if (req.method === 'POST') {
            if (productId === 'add-new-product') {
                const { name, category, totalPrice, rating = 0, image, quantity } = req.body;
                let existingProduct = await Product.findOne({ name });
                if (!existingProduct) {
                    await Product.create({ name, category, image, price: totalPrice, qty: quantity, rating });
                    return res.status(201).json({ success: true, message: 'product has been added' });
                } else {
                    return res.status(401).json('product already exists!')
                }
            }
            return res.status(401).json({ success: false, message: 'wrong query!' })
        }
        res.json('running...')
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
}

export default verifyAdmin(handler)