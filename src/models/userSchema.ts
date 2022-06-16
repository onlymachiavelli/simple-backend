import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    type: { type: String, require: false, default: "user" },
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
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)
