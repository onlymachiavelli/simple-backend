import mongoose from "mongoose"

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI || ""
    await mongoose.connect(uri)
  } catch (e) {
    console.log(e)
  }
}

export default connect
