import mongoose from 'mongoose'

const { Schema } = mongoose

const attractionEntityModelName = 'Attraction'
const attractionEntitySchema = new Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  ratings: { type: Number, required: true },
  opening_hours: { type: String, required: true },
  type_of_attraction: { type: String, required: true },
  attraction_image: { type: String, required: true }
})

export { attractionEntitySchema, attractionEntityModelName }
