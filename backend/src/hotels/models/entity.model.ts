import mongoose from 'mongoose'

const { Schema } = mongoose

const hotelEntityModelName = 'Hotel'
const hotelEntitySchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  ratings: { type: Number, required: true },
  ammenities: { type: String, required: true },
  hotel_image: { type: String, required: true }
})

export { hotelEntitySchema, hotelEntityModelName }
