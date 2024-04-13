import mongoose from 'mongoose'

const { Schema } = mongoose

const hotelEntityModelName = 'Hotel'
const hotelEntitySchema = new Schema({
  hotel_name: { type: String, required: true },
  city: { type: String, required: false },
  country: { type: String, required: false },  
  price: { type: Number, required: true },
  ratings: { type: Number, required: true },
  ammenities: { type: String, required: true },
  hotel_image: { type: String, required: true }
})

export { hotelEntitySchema, hotelEntityModelName }
