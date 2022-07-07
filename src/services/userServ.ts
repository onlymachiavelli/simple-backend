import { Users } from "./../models/userSchema"
import appDataSource from "../utils/serverConnect"


//const repos = appDataSource.getRepository(Users)

const tbs: any = [
  "username",
  "fullname",
  "email",
  "phone",
  "address",
  "createdat",
  
]
export const createUser = async (datas: any) => {
  await Users.save(datas)
}

export const getUser = async (_id: any) => {
  //return await repo.findOneBy({ id: _id })
  return await Users.find({
    select: tbs,
    where: {
      username: _id,
    },
  })

 
}

export const getPass = async (_id: any) => {
  return await Users.find({
    select: ["password"],
    where: {
      username: _id,
    },
  })
}
export const getAllUsers = async () => {
  return await Users.find({
    select: tbs,
  })
}

export const deleteUser = async (_id: any) => {
  const target: any = await getUser(_id)
  console.log("user to delete : ", target)
  await Users.remove(target)
}

export const updateData = async (_id: string, datas: any) => {
  //await repo.update(_id, datas)
  await Users
    .createQueryBuilder()
    .update(Users)
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
