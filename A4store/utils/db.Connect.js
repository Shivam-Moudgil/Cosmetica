import mongoose from 'mongoose'
import { PurchasedItems } from '../models/purchasedItems.model'
import { Users } from '../models/users.model'
import { Products } from '../models/shopProduct.model'



const connection = {};
async function dbConnect() {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.DB_Port2, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected ? 'db connected' : 'db error');
}

export default dbConnect;


