import mongoose from 'mongoose'

const { Schema } = mongoose

/*

Recommended:
  - Update the entity model name value to that of your service name
  - Update the entity schema based on your requirements

*/

const flightEntityModelName = 'Flight'
const flightEntitySchema = new Schema({
  departure_city: { type: String, required: true },
  arrival_city: { type: String, required: true },
  departure_date: { type: String, required: true },
  departure_time: { type: String, required: true },
  flight_duration: { type: Number, required: true },
  ticket_price: { type: Number, required: true }
})

export { flightEntitySchema, flightEntityModelName }
