import appDataSource from "../utils/serverConnect"
import { Admins } from "../models/admins"
const repo = appDataSource.getRepository(Admins)

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
