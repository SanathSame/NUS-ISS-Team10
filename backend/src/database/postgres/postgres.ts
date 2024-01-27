import type Database from '../interface/database.interface'

import pgPromise, { type IMain } from 'pg-promise'

class Postgres implements Database {
  pgp: IMain = pgPromise()
  db: any
  entitySchema: any
  entityModelName: any

  constructor (connectionString: string, entitySchema: any, entityModelName: any) {
    this.db = this.pgp(connectionString)
    this.entitySchema = entitySchema
    this.entityModelName = entityModelName
  }

  async connect (): Promise<void> {
    // You might not need a separate connect method with pg-promise.
    // Connections are managed automatically by the library.
  }

  async disconnect (): Promise<void> {
    await this.db.$pool.end()
  }

  /* eslint-disable no-template-curly-in-string */

  async createEntity (data: any): Promise<any> {
    const columns = this.entitySchema.obj !== undefined ? Object.keys(this.entitySchema.obj) : []
    const values = columns.map((column) => data[column])

    const result = await this.db.one(
        `INSERT INTO ${this.entityModelName}s (${columns.join(', ')}) VALUES (${columns.map((_, index) => `$${index + 1}`).join(', ')}) RETURNING *`,
        values
    )

    return result
  }

  async getOneEntity (_id: string): Promise<any> {
    return this.db.oneOrNone(`SELECT * FROM ${this.entityModelName}s WHERE _id = $1`, [_id])
  }

  async getOneEntityByUsername (username: string): Promise<any> {
    return this.db.oneOrNone(`SELECT * FROM ${this.entityModelName}s WHERE username = $1`, [username])
  }


  async getAllEntities (params: Partial<any>): Promise<any> {
    if (params === null || params === undefined) {
      return this.db.manyOrNone(`SELECT * FROM ${this.entityModelName}s`)
    }

    const condition = Object.keys(params).map((key, index) => `$${index + 1}:${key}`).join(' AND ')
    const values = Object.values(params)
    return this.db.manyOrNone(`SELECT * FROM ${this.entityModelName}s WHERE ${condition}`, values)
  }

  async updateEntity (_id: string, newData: Partial<any>): Promise<any> {
    const updateSet = Object.keys(newData)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ')

    const values = [_id, ...Object.values(newData)]
    return this.db.oneOrNone(
        `UPDATE ${this.entityModelName}s SET ${updateSet} WHERE _id = $1 RETURNING *`,
        values
    )
  }

  async deleteEntity (_id: string): Promise<any> {
    return this.db.oneOrNone(`DELETE FROM ${this.entityModelName}s WHERE _id = $1 RETURNING *`, [_id])
  }
}

export default Postgres
