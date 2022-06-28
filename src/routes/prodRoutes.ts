import express from "express"

import createProd from "../controllers/createProd"
const prodRouter = express.Router()

prodRouter.post("/", createProd)

export default prodRouter
