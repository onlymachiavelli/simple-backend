import express, { RequestHandler } from "express"
import * as adminTasks from "./../services/adminSer"
import { Admins } from "../models/admins"

import bcrypt from "bcrypt"
const createAdmin: RequestHandler = async (req, res) => {
  const datas: any = req.body
  const targetId = req.body.id
  const target = await adminTasks.getAdmin(targetId)
  if (target.length > 0) {
    res.status(422).send("Admin is already exist ! ")
  } else {
  }
}

export default createAdmin
