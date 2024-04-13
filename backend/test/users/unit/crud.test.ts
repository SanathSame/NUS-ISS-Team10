import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

describe('/users/', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/users/')
      .send({
        name: 'Cold Head Decongestion',
        description: 'Integer a nibh. In quis justo.',
        price: 29.61,
        quantity: 95
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/users/')
      .send({
        name: 'Cold Head Decongestion',
        description: 'Integer a nibh. In quis justo.',
        price: 29.61,
        quantity: 95
      })

    expect(res.body.data._id).toBeDefined()
  })
  test('returns status code 200 if can fetch a list of existing entities', async () => {
    const res: any = await request(TestSetup.app)
      .get('/users/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of entities present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/users/')

    expect(res.body.data.length).toEqual(SampleEntities.length)
  })

  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/users/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the email of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/users/${TestSetup.defaultEntityId}`)

    expect(res.body.data.quantity).toEqual(SampleEntities[0].quantity)
  })

  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/users/${TestSetup.defaultEntityId}`)
      .send({ quantity: 46 })

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated password if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/users/${TestSetup.defaultEntityId}`)
      .send({ quantity: 46 })

    expect(res.body.data.quantity).toEqual(46)
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/users/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
