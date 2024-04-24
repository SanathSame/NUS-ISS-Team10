import mongoose from 'mongoose'
const { Schema } = mongoose

/*

Recommended:
  - Update the entity model name value to that of your service name
  - Update the entity schema based on your requirements

*/

const itineraryEntityModelName = 'Itinerary'

// Define the schema for the itinerary table
const itineraryEntitySchema = new Schema({
  flight_id: { type: Schema.Types.ObjectId, ref: 'Flight', required: true },
  hotel_id: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  attraction_id: { type: Schema.Types.ObjectId, ref: 'Attraction', required: true },
  username: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true }
})

export { itineraryEntitySchema, itineraryEntityModelName }
