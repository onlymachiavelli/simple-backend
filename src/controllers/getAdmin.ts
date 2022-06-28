import express, { RequestHandler } from "express"
import * as AdminTasks from "./../services/adminSer"

const getAdmin: RequestHandler = async (req, res) => {
  const _id: string = req.body.id
  console.log(_id)
  const target: any = await AdminTasks.getAdmin(_id)

  if (target.length === 1) {
    console.log(target[0])
    res.status(302).send(target)
  } else {
    res.status(404).send("Admin doesn't exist ! ")
  }
}

const getAllAdmins: RequestHandler = async (req, res) => {
  //right herre were gonna get all the user !
  const targets = await AdminTasks.getAlladmins()

  res.status(302).send(targets)
}

export { getAdmin, getAllAdmins }
