import mongoose from 'mongoose'

const { Schema } = mongoose

const authEntityModelName = 'User'
const authEntitySchema = new Schema({
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

export { authEntityModelName, authEntitySchema }
