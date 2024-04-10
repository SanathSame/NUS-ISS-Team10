import express, { type Express } from 'express'
import dotenv from 'dotenv'

import EntityRouter from '../src/products/routes/entity.route'
import { createDatabaseObject } from '../src/database/factory/databaseFactory'

import type Database from '../src/database/interface/database.interface'
import { productEntityModelName, productEntitySchema } from '../src/products/models/entity.model'
import { authEntitySchema, authEntityModelName } from '../src/auth/models/entity.model'
import { flightEntitySchema, flightEntityModelName } from '../src/flights/models/entity.model'
import { userEntitySchema, userEntityModelName } from '../src/users/models/user.model'

import { attractionEntitySchema, attractionEntityModelName } from '../src/attractions/models/entity.model'

import AuthRouter from '../src/auth/routes/auth.route'
import UserRouter from '../src/users/routes/user.route'
import AttractionRouter from '../src/attractions/routes/entity.route'
import FlightRouter from '../src/flights/routes/entity.route'

export const app: Express = express()

dotenv.config()

console.log(process.env.DATABASE_CONNECTION_URL)

const productDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), productEntitySchema, productEntityModelName)
const authDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), authEntitySchema, authEntityModelName)
const userDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), userEntitySchema, userEntityModelName)
const attractionDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), attractionEntitySchema, attractionEntityModelName)
const flightDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), flightEntitySchema, flightEntityModelName)
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

// Call connect function to call wrapper class to connect to db

app.set('product-database', productDatabase)
app.set('auth-database', authDatabase)
app.set('user-database', userDatabase)
app.set('attraction-database', attractionDatabase)
app.set('flight-database', flightDatabase)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products/', EntityRouter)
app.use('/auth/', AuthRouter)
app.use('/users/', UserRouter)
app.use('/attractions/', AttractionRouter)
app.use('/flights/', FlightRouter)
