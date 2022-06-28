import express from "express"
import createAdmin from "./../controllers/createAdmin"

import { getAllAdmins, getAdmin } from "./../controllers/getAdmin"
import deleteAdmin from "../controllers/deleteAdmin"
const adminRouter = express.Router()

adminRouter.post("/", createAdmin)

adminRouter.get("/", getAdmin)
adminRouter.get("/all", getAllAdmins)

adminRouter.delete("/", deleteAdmin)
export default adminRouter
