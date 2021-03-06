import { notEqual } from "assert"
import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { Products } from "./productSchema"
@Entity()
export class Admins extends BaseEntity {
  //The id is identity card
  @PrimaryColumn()
  id: string
  @Column({ nullable: false })
  fullname: string

  @Column({ nullable: false })
  password: string

  @Column({ nullable: false, enum: ["user", "admin", "done"] })
  type: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false, unique: true })
  phone: string

  @Column({ default: () => new Date() })
  createdat: Date

  @OneToMany(() => Products, (prod) => prod.addedby)
  prod: Products
}

/*
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

*/
