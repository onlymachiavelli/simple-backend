import express, { RequestHandler } from "express"
import * as AdminTasks from "./../services/adminSer"

const getAdmin: RequestHandler = async (req, res) => {
  const targetId = req.body.id
  const target = await AdminTasks.getAdmin(targetId)
  res.status(201).send(target)
}

const getAllAdmins: RequestHandler = async (req, res) => {
  //right herre were gonna get all the user !
  const targets = await AdminTasks.getAlladmins()

  res.status(201).send(targets)
}

export { getAdmin, getAllAdmins }
