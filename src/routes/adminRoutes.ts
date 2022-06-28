import express from "express"
import createAdmin from "./../controllers/createAdmin"

import { getAllAdmins, getAdmin } from "./../controllers/getAdmin"
const adminRouter = express.Router()

adminRouter.post("/", createAdmin)

adminRouter.get("/", getAdmin)
adminRouter.get("/all", getAllAdmins)

export default adminRouter
