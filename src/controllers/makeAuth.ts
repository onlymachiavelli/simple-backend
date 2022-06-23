import express, { RequestHandler } from "express"

import * as userTaks from "./../services/userServ"
import bcrypt from "bcrypt"
import "jsonwebtoken"
const makeAuth: RequestHandler = async (req, res) => {
  const targetId: string = req.body.id
  const targetPass: string = req.body.password

  //finding the user !
  const target = await userTaks.getPass(targetId)
  console.log(target[0].password)
  if (target.length === 1) {
    bcrypt.compare(targetPass, target[0].password, (err, result) => {
      if (err) {
        throw err
      }
      if (result) {
        res.status(201).send("User is authed ! ")
      } else {
        res.status(400).send("Error authiong dude ! ")
      }
    })
  } else {
    res.status(400).send("Error authiong dude ! ")
  }
}

export default makeAuth
