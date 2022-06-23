import { users } from "./../models/userSchema"
import appDataSource from "../utils/serverConnect"

const repo = appDataSource.getRepository(users)
const tbs: any = [
  "id",
  "type",
  "fullname",
  "email",
  "phone",
  "address",
  "createdat",
]
export const createUser = async (datas: any) => {
  await repo.save(datas)
}

export const getUser = async (_id: string) => {
  //return await repo.findOneBy({ id: _id })
  return await repo.find({
    select: tbs,
    where: {
      id: _id,
    },
  })
}

export const getPass = async (_id: string) => {
  return await repo.find({
    select: ["password"],
    where: {
      id: _id,
    },
  })
}
export const getAllUsers = async () => {
  return await repo.find({
    select: tbs,
  })
}

export const deleteUser = async (_id: any) => {
  const target: any = await getUser(_id)
  console.log("user to delete : ", target)
  await repo.remove(target)
}

export const updateData = async (_id: string, datas: any) => {
  //await repo.update(_id, datas)
  await repo
    .createQueryBuilder()
    .update(users)
    .set(datas)
    .where({
      id: _id,
    })
    .execute()
}

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
