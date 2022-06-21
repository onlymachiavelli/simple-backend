import express from "express"
import "dotenv/config"
import appDataSource from "./utils/serverConnect"

const app = express()
const cors = require("cors")
import { json } from "body-parser"
import router from "./routes/userRoute"
//import userRoute from "./routes/userRoute"
app.use(cors())
app.use(json())
const PORT = process.env.PORT || 3000
console.log(String(process.env.PASSWORD))
//app.use("/user", userRoute)
appDataSource
  .initialize()
  .then(() => {
    app
      .listen(PORT, () => {
        console.log(`server started at port ${PORT}`)
        app.use("/user", router)
      })
      .on("error", (e) => {
        console.log(e)
      })
  })
  .catch((e) => {
    console.log(e)
  })
