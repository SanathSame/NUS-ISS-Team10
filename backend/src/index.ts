import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import EntityRouter from './products/routes/entity.route'

import type Database from './database/interface/database.interface'
import { createDatabaseObject } from './database/factory/databaseFactory'
import { productEntityModelName, productEntitySchema } from './products/models/entity.model'

import AuthRouter from './auth/routes/auth.route'
import { authEntityModelName, authEntitySchema } from './auth/models/entity.model'
import UserRouter from './users/routes/user.route'
import { userEntityModelName, userEntitySchema } from './users/models/user.model'
import AttractionRouter from './attractions/routes/entity.route'
import { attractionEntityModelName, attractionEntitySchema } from './attractions/models/entity.model'
import FlightRouter from './flights/routes/entity.route'
import { flightEntityModelName, flightEntitySchema } from './flights/models/entity.model'
import HotelRouter from './hotels/routes/entity.route'
import { hotelEntityModelName, hotelEntitySchema } from './hotels/models/entity.model'
import ItineraryRouter from './itinerary/routes/entity.route'
import { itineraryEntityModelName, itineraryEntitySchema } from './itinerary/models/entity.model'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 4000

const productDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), productEntitySchema, productEntityModelName)
const authDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), authEntitySchema, authEntityModelName)
const userDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), userEntitySchema, userEntityModelName)
const attractionDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), attractionEntitySchema, attractionEntityModelName)
const flightDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), flightEntitySchema, flightEntityModelName)
const hotelDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), hotelEntitySchema, hotelEntityModelName)
const itineraryDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), itineraryEntitySchema, itineraryEntityModelName)
// Add db object here for entity schema and model name, ref products

productDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

authDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

userDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

attractionDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

flightDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

hotelDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

itineraryDatabase.connect()
  .catch((error) => {
    console.log(error)
  })

// Call connect function to call wrapper class to connect to db

app.set('product-database', productDatabase)
app.set('auth-database', authDatabase)
app.set('user-database', userDatabase)
app.set('attraction-database', attractionDatabase)
app.set('flight-database', flightDatabase)
app.set('hotel-database', hotelDatabase)
app.set('itinerary-database', itineraryDatabase)

// set a unique key for db data retrieval in particular controller - refer to controller

app.use(cors())
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products/', EntityRouter)
app.use('/auth/', AuthRouter)
app.use('/users/', UserRouter)
app.use('/attractions/', AttractionRouter)
app.use('/flights/', FlightRouter)
app.use('/hotels/', HotelRouter)
app.use('/itineraries/', ItineraryRouter)

// Add custom router to expose its routes in backends

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
