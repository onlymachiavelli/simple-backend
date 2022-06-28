import express, { RequestHandler } from "express"

import * as AdminTasks from "./../services/adminSer"

const deleteAdmin: RequestHandler = async (req, res) => {
  const _id = req.body.id
  //find user !
  const target = await AdminTasks.getAdmin(_id)
  if (target.length === 1) {
    AdminTasks.deleteAdmin(_id)
      .then(() => {
        res.status(200).send("Deleted ! ")
      })
      .catch((e) => {
        res.status(400).send("something is wrong ! bad request or smthng ! ")
      })
  } else {
    res.status(404).send("Admin doesn't exist ! ")
  }
}

export default deleteAdmin
