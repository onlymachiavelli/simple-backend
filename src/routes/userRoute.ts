import express from "express"

import createUser from "../controllers/createUser"
import { getAllUsers, getUser } from "./../controllers/getUser"

const router = express.Router()
router.post("/", createUser)
router.get("/", getAllUsers)
router.get("/u", getUser)

export default router
/*
import express from "express"

import createUser from "../controllers/createUser"
import bodyParser from "body-parser"
const userRoutes = express.Router()

userRoutes.post("/", createUser.createUser)

export default userRoutes
 */
