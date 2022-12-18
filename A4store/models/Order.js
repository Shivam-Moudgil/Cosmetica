import mongoose from "mongoose";

const todate = new Date();
let newdate = todate.setDate(todate.getDate() + 3);

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
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
      type: Boolean,
      default: false,
    },
    method: {
      type: String,
      enum: ["cash", "card"],
      default: "card",
    },
    quantity: {
      type: Number,
      required:true
      },
    deliveryDate: {
      type: Date,
      default: new Date(newdate),
    },
  },
  {timestamps: true}
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
