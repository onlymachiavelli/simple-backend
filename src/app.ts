import express from "express"
import "dotenv/config"
import connect from "./utils/mongoConnect"

const app = express()
const cors = require("cors")
import { json } from "body-parser"
import userRoute from "./routes/userRoute"
app.use(cors())
app.use(json())
const PORT = process.env.PORT || 3000

app.use("/user")
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on port 3000")
    })
  })
  .catch((e) => {
    console.log("connection error ! 'server !'" + e)
  })
