import express, { RequestHandler } from "express"
import * as userTasks from "./../services/userServ"

const deleteUser: RequestHandler = async (req, res) => {
  const targetId: string = req.body.id
  console.log(targetId)
  const target: any = await userTasks.getUser(targetId)
  console.log(target)
  if (target.length === 1) {
    userTasks
      .deleteUser(targetId)
      .then(() => {
        res.status(201).send("User is deleted from the database ! ")
      })
      .catch((e) => {
        console.log(e)
        res.status(400).send("An error occured ! ")
      })
  } else {
    res.status(400).send("user doesnt exist ! ")
  }
}

export default deleteUser
