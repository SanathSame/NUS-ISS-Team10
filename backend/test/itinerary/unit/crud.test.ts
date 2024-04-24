import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

const defaultEntityId: string = '123456789012345678901234'

describe('/users/', () => {
  test('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(TestSetup.app)
      .get('/itineraries/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/itineraries/')
      .send({
        flight_id: '2',
        hotel_id: '123456789012345678901236',
        attraction_id: '661609ebfc13ae7ef9ab89f6',
        date: '2022-06-07',
        username: 'Neville'
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/itineraries/')
      .send({
        flight_id: '2',
        hotel_id: '123456789012345678901236',
        attraction_id: '661609ebfc13ae7ef9ab89f6',
        date: '2022-06-07',
        username: 'Neville'
      })

    expect(res.body.data._id).toBeDefined()
  })
  test('returns status code 200 if can fetch a list of existing entities', async () => {
    const res: any = await request(TestSetup.app)
      .get('/itineraries/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of entities present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/itineraries/')

    expect(res.body.data.length).toEqual(SampleEntities.length)
  })

  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/itineraries/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the email of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/itineraries/${defaultEntityId}`)

    expect(res.body.data.username).toEqual(SampleEntities[0].username)
  })

  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/itineraries/${defaultEntityId}`)
      .send({ username: 'imelda' })

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/itineraries/${defaultEntityId}`)
      .send({ username: 'Neville' })

    expect(res.body.data.username).toEqual('Neville')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/itineraries/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
