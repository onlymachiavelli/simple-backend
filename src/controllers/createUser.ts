import * as userTasks from "./../services/userServ"
import { users } from "./../models/userSchema"
import express, { RequestHandler } from "express"

import bcrypt from "bcrypt"
const createUser: RequestHandler = async (req, res) => {
  const datas: any = req.body
  //user should not be existing

  const target = await userTasks.getUser(datas.id)
  if (target) {
    res.status(400).send("User already exist ! ")
  } else {
    const user = new users()
    const saltRounds: any = process.env.SALT || 10
    let hashedPass: any
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(datas.password, salt, (err, hash) => {
        hashedPass = hash
      })
    })

    user.id = datas.id
    user.fullname = datas.fullname
    user.email = datas.fullname
    user.password = hashedPass
    user.address = datas.address
    user.phone = datas.phone

    await userTasks
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
