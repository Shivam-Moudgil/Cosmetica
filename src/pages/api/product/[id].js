// import dbConnect from "../../../../utils/mongo";
// import Product from "../../../../models/Product";
// export default async function handler(req, res) {
//     const {
//         method,
//         query: { id },
//     } = req;

//     await dbConnect();

//     if (method == "GET") {
//         try {
//             const getData = await Product.findById(id);
//             res.status(200).json(getData);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     }
// }