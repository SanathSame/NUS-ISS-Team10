import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import EntityRouter from './products/routes/entity.route'

import type Database from './database/interface/database.interface'
import { createDatabaseObject } from './database/factory/databaseFactory'
import { productEntityModelName, productEntitySchema } from './products/models/entity.model'

import AuthRouter from './auth/routes/auth.route'
import { authEntityModelName, authEntitySchema } from './auth/models/entity.model'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 4000

const productDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), productEntitySchema, productEntityModelName)
const authDatabase: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL), authEntitySchema, authEntityModelName)


productDatabase.connect()
  .catch((error) => {
    console.log(error)
})

authDatabase.connect()
  .catch((error) => {
    console.log(error)
})

app.set('product-database', productDatabase)
app.set('auth-database', authDatabase)

app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products/', EntityRouter)
app.use('/auth/', AuthRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
