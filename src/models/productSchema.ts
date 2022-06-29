import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm"
import { Admins } from "./admins"
@Entity()
export class Products extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ nullable: false, default: "perfume" })
  type: string

  @Column({ nullable: false, unique: true })
  ref: string
  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  price: number

  @Column({ nullable: false })
  description: string

  @OneToOne(() => Admins, (admins) => admins.id)
  @JoinColumn({ name: "id" })
  addedby: Admins

  @Column({ nullable: false, default: () => Date.now() })
  createdat: Date
}
/*
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

*/
