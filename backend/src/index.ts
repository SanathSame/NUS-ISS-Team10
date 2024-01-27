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

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 4000

const productDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), productEntitySchema, productEntityModelName)
const authDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), authEntitySchema, authEntityModelName)
const userDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), userEntitySchema, userEntityModelName)
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

// Call connect function to call wrapper class to connect to db

app.set('product-database', productDatabase)
app.set('auth-database', authDatabase)
app.set('user-database', authDatabase)

// set a unique key for db data retrieval in particular controller - refer to controller


app.use(cors())
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products/', EntityRouter)
app.use('/auth/', AuthRouter)
app.use('/users/', UserRouter)

// Add custom router to expose its routes in backends

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
