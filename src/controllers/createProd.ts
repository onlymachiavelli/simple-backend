import { Products } from "../models/productSchema"
import * as ProdTasks from "./../services/prodServ"
import express, { RequestHandler } from "express"

const createProd: RequestHandler = async (req, res) => {
  const datas: any = req.body
  const target: any = ProdTasks.getProd(datas.id)
  if (target.length === 1) {
    res.status(422).send("Product Id already exist ! ")
  } else {
    ProdTasks.postProd(datas)
      .then(() => {
        res.status(201).send("Done saving the prod ")
      })
      .catch((e) => {
        res.send(400).send("Error saving the prod")
        console.log(e)
      })
  }
}

export default createProd
