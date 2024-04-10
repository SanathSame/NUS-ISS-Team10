import express, { type Express } from 'express'
import dotenv from 'dotenv'

import EntityRouter from '../src/products/routes/entity.route'
import { createDatabaseObject } from '../src/database/factory/databaseFactory'

import type Database from '../src/database/interface/database.interface'
import { productEntityModelName, productEntitySchema } from '../src/products/models/entity.model'
import AuthRouter from '../src/auth/routes/auth.route'
import UserRouter from '../src/users/routes/user.route'
import AttractionRouter from '../src/attractions/routes/entity.route'
import FlightRouter from '../src/flights/routes/entity.route'

export const app: Express = express()

dotenv.config()

const database: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), productEntitySchema, productEntityModelName)
console.log(process.env.DATABASE_CONNECTION_URL)

database.connect()
  .catch((error) => {
    console.log(error)
  })
app.set('database', database)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products/', EntityRouter)
app.use('/auth/', AuthRouter)
app.use('/users/', UserRouter)
app.use('/attractions/', AttractionRouter)
app.use('/flights/', FlightRouter)
