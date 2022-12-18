import dbConnect from "../../../../../utils/mongo";
import { PurchasedItems } from "../../../../../models/purchasedItems.model";
import verifyAdmin from './../../../../../middlewares/verifyAdmin'

const handler = async (req, res) => {
    const {
        status,
        qty,
        limit = 15,
        page = 1,
        orderDate,
        deleveryDate,
    } = req.query
    try {
        await dbConnect()
        if (req.method === 'GET') {
            let items = await PurchasedItems.find()
            let length = items.length
            let purchasedItems = await PurchasedItems.find({})
                .limit(limit)
                .skip((page - 1) * limit)
            if (qty && orderDate) {
                let [year, month] = orderDate.split('-')
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            dateOfPurchase: 1,
                            dateOfDelevery: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $sort: { quantity: qty === 'asc' ? 1 : -1 } },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (qty && deleveryDate) {
                let [year, month] = deleveryDate.split('-')
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            dateOfPurchase: 1,
                            dateOfDelevery: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $sort: { quantity: qty === 'asc' ? 1 : -1 } },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            }
            else if (qty) {
                purchasedItems = await PurchasedItems.find({})
                    .sort({ quantity: qty === 'asc' ? 0 : -1 })
                    .limit(limit)
                    .skip((page - 1) * limit)
            } else if (orderDate) {
                let [year, month] = orderDate.split('-')
                // purchasedItems = await PurchasedItems.aggregate([
                //   {
                //     $group: {
                //       _id: { $month: '$createdAt', $year: '$createdAt' },
                //       items: { $push: '$$ROOT' },
                //     },
                //   },
                //   { $match: { _id: 12 } },
                // ])
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            dateOfPurchase: 1,
                            dateOfDelevery: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (deleveryDate) {
                let [year, month] = deleveryDate.split('-')
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            dateOfPurchase: 1,
                            dateOfDelevery: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (status) {
                // add in data base 
            }
            return res.json({ purchasedItems, length })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}


export default verifyAdmin(handler)