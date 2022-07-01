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

  @Column({
    nullable: false,
    array: true,
  })
  products: object[]

  @Column({ nullable: false, default: () => Date.now() })
  orderdate: Date
}

//to add relations
export class ServedOrders extends BaseEntity {
  @PrimaryColumn()
  orderid: string

  @Column()
  userid: string

  @Column({ nullable: false })
  served: boolean
  @Column()
  adminid: string

  @Column()
  servedate: Date
}
//Each product should contain these datas !
/*
  name of the prod -> string 
  price  -> decimal / Number 
  ref  -> string 


*/
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
