import { DataSource } from "typeorm"
const appDataSource = new DataSource({
  type: "postgres",
  host: String(process.env.HOST),
  port: Number(process.env.DBPORT),
  username: String(process.env.USER) || "",
  password: String(process.env.PASSWORD) || "",
  database: String(process.env.DATABASE) || "",
  entities: [__dirname + "/../models/*.ts"],
})

export default appDataSource

/*
import mongoose from "mongoose"

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI || ""
    await mongoose.connect(uri)
  } catch (e) {
    console.log(e)
  }
}

export default connect
 */
