import mongoose from "mongoose";

//do not use these docs these are just dummy I will discard them in the end
import { PurchasedItems } from '../models/purchasedItems.model'
import { Users } from '../models/users.model'
import { Products } from '../models/shopProduct.model'

// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = process.env.DB_Port2;


if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
