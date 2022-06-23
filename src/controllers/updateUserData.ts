import express, { RequestHandler } from "express"
import * as userTasks from "./../services/userServ"
const updateData: RequestHandler = async (req, res) => {
  const targetId: string = req.body.id
  const datas: any = req.body.datas
  const user = await userTasks.getUser(targetId)
  if (user.length === 1) {
    userTasks
      .updateData(targetId, datas)
      .then(() => {
        res.status(201).send("updated successfully ")
      })
      .catch((e) => {
        console.log(e)
        res.status(400).send("There's an error ! ")
      })
  } else {
    res.status(404).send("user doesn't exist ! ")
  }
}

export default updateData

/*

{
    target: kdahsbgkm, 
    datas :{
        
    }
}

*/
