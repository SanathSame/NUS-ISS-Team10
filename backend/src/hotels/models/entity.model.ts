import mongoose from 'mongoose'

const { Schema } = mongoose

const hotelEntityModelName = 'Hotel'
const hotelEntitySchema = new Schema({
  hotel_name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: false },
  country: { type: String, required: false },  
  price_per_night: { type: Number, required: true },
  ratings: { type: Number, required: true },
  ammenities: { type: String, required: true },
})

export { hotelEntitySchema, hotelEntityModelName }
