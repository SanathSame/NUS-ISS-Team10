import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

const defaultEntityId: string = '1'

describe('/flights/', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/flights/')
      .send({
        name: 'Attraction',
        city: 'Singapore',
        description: 'Integer a nibh. In quis justo.',
        price: 29.61,
        ratings: 5,
        opening_hours: '10:01 PM',
        type_of_attraction: 'Beaches and Islands'
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/flights/')
      .send({
        name: 'Attraction',
        city: 'Singapore',
        description: 'Integer a nibh. In quis justo.',
        price: 29.61,
        ratings: 5,
        opening_hours: '10:01 PM',
        type_of_attraction: 'Beaches and Islands'
      })

    expect(res.body.data._id).toBeDefined()
  })

  test('returns status code 200 if can fetch a list of existing entities', async () => {
    const res: any = await request(TestSetup.app)
      .get('/flights/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of entities present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/flights/')

    expect(res.body.data.length).toEqual(SampleEntities.length)
  })

  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/flights/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the attribute of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/flights/${defaultEntityId}`)

    expect(res.body.data.departure_city).toEqual(SampleEntities[0].departure_city)
  })

  test('returns status code 200 if it updates a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/flights/${defaultEntityId}`)
      .send({ city: 'Malaysia' })
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/flights/${defaultEntityId}`)
      .send({ city: 'Malaysia' })

    expect(res.body.data.city).toEqual('Malaysia')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/flights/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
