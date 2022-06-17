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
