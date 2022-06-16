import mongoose from "mongoose"

const prodSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rate: { type: Number, required: true, default: 0 },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Product", prodSchema)