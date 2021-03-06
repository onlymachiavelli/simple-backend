import {Column, PrimaryColumn , Entity, BaseEntity } from 'typeorm'



@Entity()
export class Users extends BaseEntity
{
  @PrimaryColumn()
  username : String 

  @Column({nullable:false} ) 
  password:String 

  @Column({nullable:false })
  fullname : String 

  @Column({unique:true, nullable: false }) 
  email : String 

  @Column({unique:true , nullable:false}) 
  phonenumber: String 

  @Column({nullable:false }) 
  birthday : Date
  
  @Column({nullable:false})
  adress:String 

  @Column({nullable: false, default:false }) 
  isverified  : boolean 

  @Column( {nullable:false, default :()=> new Date()}) 
  createdat  :Date

}


/*
import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import { Admins } from "./admins"
@Entity()
export class users extends BaseEntity {
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

  @Column({ nullable: false, unique: true })
  phone: string

  @Column({ nullable: false })
  address: string

  @Column({ default: () => new Date() })
  createdat: Date

  //@ManyToOne((type) => Admins)
  //@JoinColumn()
  //createdby: Admins
  //@Column({ nullable: false })
  //createdby: string
}
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
