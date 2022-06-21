import express from "express"

import createUser from "../controllers/createUser"

const router = express.Router()
router.post("/", createUser)

export default router
/*
import express from "express"

import createUser from "../controllers/createUser"
import bodyParser from "body-parser"
const userRoutes = express.Router()

userRoutes.post("/", createUser.createUser)

export default userRoutes
 */
