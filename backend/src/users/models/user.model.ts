import mongoose from 'mongoose'

const { Schema } = mongoose

const userEntityModelName = 'User'
const userEntitySchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export { userEntitySchema, userEntityModelName }
