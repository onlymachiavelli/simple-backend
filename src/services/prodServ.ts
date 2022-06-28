import { Product } from "./../models/productSchema"

export const postProd = async (datas: any) => {
  await Product.save(datas)
}

export const getProd = async (_id: any) => {
  return await Product.find({
    where: {
      id: _id,
    },
  })
}

export const getAllProd = async () => {
  return await Product.find()
}

export const deleteProd = async (_id: any) => {
  const target = await getProd(_id)
  Product.remove(target)
}

export const updateProd = async (datas: any) => {
  const targetId = datas.id
  const target = await getProd(targetId)
  if (target.length === 1) {
    Product.createQueryBuilder()
      .update(Product)
      .set(datas)
      .where({ id: targetId })
      .execute()
  }
}
