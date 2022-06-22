import * as userTasks from "./../services/userServ"
import { users } from "./../models/userSchema"
import express, { RequestHandler } from "express"

import bcrypt from "bcrypt"
const createUser: RequestHandler = async (req, res) => {
  const datas: any = req.body

  const target = await userTasks.getUser(datas.id)
  if (target.length > 0) {
    console.log("the target is  : ", target)
    res.status(400).send("User already exist ! ")
  } else {
    const user = new users()
    const saltRounds: number = Number(process.env.SALT) || 10
    user.password = await bcrypt
      .genSalt(saltRounds)
      .then((s) => bcrypt.hash(datas.password, s))

    user.id = datas.id
    user.fullname = datas.fullname
    user.email = datas.email
    user.address = datas.address
    user.phone = datas.phone
    user.createdat = new Date()
    user.type = "user"
    userTasks
      .createUser(user)
      .then(() => {
        res.status(200).send("User Created")
      })
      .catch((e) => {
        console.log(e)
        res.status(400).send("an error occured ! ")
      })
  }
}
export default createUser

/*
import * as userTasks from "./../services/userServ"

import express, { RequestHandler } from "express"

import bcrypt from "bcrypt"

const createUser: RequestHandler = async (req, res) => {
  const id = req.body
  //check user .
  let datas: any = req.body
  datas.password = await bcrypt.hash(datas.password, 10)
  //find user
  const user: any = await userTasks.getUser(id)
  if (user !== null) {
    res.status(400).send("user already exist")
  } else {
    try {
      await userTasks.createUser(datas)
      res.status(200).send("user created")
    } catch (e) {
      res.status(400).send("error")
    }
  }
}

export default { createUser }
*/
