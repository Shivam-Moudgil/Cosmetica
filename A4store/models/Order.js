import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: "user",
      // required:true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "maindata",
      required: true,
    },
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
