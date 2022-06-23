import express from "express"

import createUser from "../controllers/createUser"
import { getAllUsers, getUser } from "./../controllers/getUser"
import deleteUser from "../controllers/deleteUser"
import updateData from "../controllers/updateUserData"
const router = express.Router()
router.post("/", createUser)
router.get("/", getAllUsers)
router.get("/u", getUser)

router.delete("/", deleteUser)

//to update onee data!
router.patch("/", updateData)
//to update all the datas!
router.put("/", updateData)
export default router

/*
import express from "express"

import createUser from "../controllers/createUser"
import bodyParser from "body-parser"
const userRoutes = express.Router()

userRoutes.post("/", createUser.createUser)

export default userRoutes
 */
