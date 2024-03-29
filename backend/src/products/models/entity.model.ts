import mongoose from 'mongoose'

const { Schema } = mongoose

/*

Recommended:
  - Update the entity model name value to that of your service name
  - Update the entity schema based on your requirements

*/

const productEntityModelName = 'Product'
const productEntitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
})

export { productEntitySchema, productEntityModelName }
