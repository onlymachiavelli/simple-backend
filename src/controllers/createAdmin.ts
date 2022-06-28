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
    const admin = new Admins()

    const saltRounds: number = Number(process.env.SALT) || 10
    admin.password = await bcrypt
      .genSalt(saltRounds)
      .then((s) => bcrypt.hash(datas.password, s))
    admin.createdat = new Date()
    admin.id = datas.id
    admin.type = "admin"
    admin.phone = datas.phone
    admin.email = datas.email
    admin.fullname = datas.fullname

    adminTasks
      .createAdmin(admin)
      .then(() => {
        res.status(201).send("Admin is created ! ")
      })
      .catch((e) => {
        res.status(400).send("Error creating the admin ! ")
      })
  }
}

export default createAdmin
