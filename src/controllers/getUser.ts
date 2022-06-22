import * as userTasks from "./../services/userServ"

import express, { RequestHandler } from "express"

import appDataSource from "../utils/serverConnect"

const getAllUsers: RequestHandler = async (req, res) => {
  const result = await userTasks.getAllUsers()
  res.status(201).send(result)
}

const getUser: RequestHandler = async (req, res) => {
  const _id = req.params.id
  const results = await userTasks.getUser(_id)
  res.status(201).send(results)
}

export { getAllUsers, getUser }
