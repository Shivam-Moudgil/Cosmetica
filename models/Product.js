import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      //   required: true,
    },
    ratingcount: {
      type: Number,
      //   required: true,
    },
    category: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      default: 12,
      //   required:true
    },
  },
  {timestamps: true}
);

export default mongoose.models.maindata ||
  mongoose.model("maindata", ProductSchema);
