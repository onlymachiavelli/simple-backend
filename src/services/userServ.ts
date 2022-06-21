import { users } from "./../models/userSchema"
import appDataSource from "../utils/serverConnect"
export const createUser = async (datas: any) => {
  await appDataSource.manager.save(datas)
}

export const getUser = async (id: string) => {}

/*
import User from "../models/userSchema"

export const createUser = async (data: any) => {
  await User.create(data)
}

export const getUser = async (id: string) => {
  User.findById(id).lean()
}

export const deleteUser = async (id: string) => {
  await User.findByIdAndDelete(id)
}

export const getAllUsers = async () => {
  await User.find().lean()
}
 */
