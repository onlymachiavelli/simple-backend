import express from "express"
import createAdmin from "./../controllers/createAdmin"

const adminRouter = express.Router()

adminRouter.post("/", createAdmin)

export default adminRouter
