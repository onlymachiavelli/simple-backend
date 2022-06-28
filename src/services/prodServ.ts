import { Products } from "./../models/productSchema"

export const postProd = async (datas: any) => {
  await Products.save(datas)
}

export const getProd = async (_id: any) => {
  return await Products.find({
    where: {
      id: _id,
    },
  })
}

export const getAllProd = async () => {
  return await Products.find()
}

export const deleteProd = async (_id: any) => {
  const target = await getProd(_id)
  Products.remove(target)
}

export const updateProd = async (datas: any) => {
  const targetId = datas.id
  const target = await getProd(targetId)
  if (target.length === 1) {
    Products.createQueryBuilder()
      .update(Products)
      .set(datas)
      .where({ id: targetId })
      .execute()
  }
}
