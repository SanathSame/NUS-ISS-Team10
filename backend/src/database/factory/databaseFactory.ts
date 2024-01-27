import type Database from '../interface/database.interface'
import MongoDb from '../mongodb/mongodb'
import Postgres from '../postgres/postgres'
import { SupportedDatabases } from './supportedDatabases'

export function createDatabaseObject (selectedDatabase: number, connectionUrl: string, entitySchema: any, entityModelName: any): Database {
  switch (selectedDatabase) {
    case SupportedDatabases.MONGODB: {
      return new MongoDb(connectionUrl, entitySchema, entityModelName)
    }
    case SupportedDatabases.POSTGRES: {
      return new Postgres(connectionUrl, entitySchema, entityModelName)
    }
    default: {
      // statements
      return new MongoDb(connectionUrl, entitySchema, entityModelName)
    }
  }
}
