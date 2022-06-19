import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

export class users {
  @PrimaryColumn({ nullable: false })
  id: string

  @Column({ nullable: false, default: "user" })
  type: string

  @Column({ nullable: false })
  fullname: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  password: string

  @Column({ nullable: false })
  phone: string

  @Column({ nullable: false })
  address: string

  @Column({ nullable: false, default: () => Date.now() })
  createdAt: Date
}

/*
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

*/
