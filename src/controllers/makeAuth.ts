import express, { RequestHandler } from "express"

import * as userTaks from "./../services/userServ"
import bcrypt from "bcrypt"
const makeAuth: RequestHandler = async (req, res) => {
  let check: boolean

  const targetId: string = req.body.id
  const targetPass: string = req.body.password
  //finding the user !
  const target = await userTaks.getUser(targetId)
  if (target.length === 1) {
  } else {
    check = false
  }
}

export default makeAuth
