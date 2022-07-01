import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinColumn,
} from "typeorm"
import { users } from "./userSchema"

@Entity()
export class Orders extends BaseEntity {
  @PrimaryColumn()
  orderid: string

  @ManyToMany(() => users, (user) => user.id)
  @JoinColumn()
  userid: users

  @Column({ nullable: false, default: () => Date.now() })
  orderdate: Date
}

/*
import mongoose from "mongoose"

const ordersSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    userID: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { timestamps: true }
)

export default mongoose.model("Orders", ordersSchema)

*/
