import mongoose from "mongoose"

const adminSchema = new mongoose.Schema(
  {
    accType: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },

    _id: { type: String, required: true, unique: true },
    fullname: {
      type: String,

      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    phone: { type: String, required: true, unique: true },

    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true },
  },
  { timestamps: true }
)

export default mongoose.model("Admin", adminSchema)
