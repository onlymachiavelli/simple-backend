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
  if (user) {
    res.status(400).send("user already exist")
  } else {
    await userTasks.createUser(datas)
    res.status(200).send("user created")
  }
}

export default { createUser }
