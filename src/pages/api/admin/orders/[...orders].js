import dbConnect from "../../../../../utils/mongo";
import PurchasedItems from "../../../../../models/Order";
import verifyAdmin from './../../../../../middlewares/verifyAdmin'

const handler = async (req, res) => {
    const {
        status,
        qty,
        limit = 15,
        page = 1,
        orderDate,
        deliveryDate,
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
                            createdAt: 1,
                            method: 1,
                            deliveryDate: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $sort: { quantity: qty === 'asc' ? 1 : -1 } },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (qty && deliveryDate) {
                let [year, month] = deliveryDate.split('-')
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            createdAt: 1,
                            deliveryDate: 1,
                            method: 1,
                            total: 1,
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
                            createdAt: 1,
                            total: 1,
                            method: 1,
                            deliveryDate: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (deliveryDate) {
                let [year, month] = deliveryDate.split('-')
                purchasedItems = await PurchasedItems.aggregate([
                    {
                        $project: {
                            user: 1,
                            product: 1,
                            quantity: 1,
                            createdAt: 1,
                            total: 1,
                            method: 1,
                            deliveryDate: 1,
                            month: { $month: '$createdAt' },
                            year: { $year: '$createdAt' },
                        },
                    },
                    { $match: { month: +month, year: +year } },
                    { $skip: ((+page) - 1) * Number(limit) },
                    { $limit: +limit }
                ])
            } else if (status) {
                purchasedItems = await PurchasedItems.find({});
                let newItemsList;
                if (status === 'pending') {
                    newItemsList = purchasedItems.filter(item => {
                        return (new Date(item.deliveryDate) - new Date(Date.now()) > 0)
                    })
                } else if (status === 'delevered') {
                    newItemsList = purchasedItems.filter(item => {
                        return (new Date(Date.now()) - new Date(item.deliveryDate) > 0)
                    })
                }
                purchasedItems = newItemsList;
            }
            return res.json({ purchasedItems, length })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}


export default verifyAdmin(handler)