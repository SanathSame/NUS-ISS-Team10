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
        _id: '1',
        departure_city: 'Hing',
        departure_country: 'Bali',
        arrival_city: 'Temburong',
        arrival_country: 'Brunei',
        departure_date: '2022-04-28',
        departure_time: '7:38 AM',
        flight_duration: 5,
        ticket_price: 801.68
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/flights/')
      .send({
        _id: '1',
        departure_city: 'Jakarta',
        departure_country: 'Bali',
        arrival_city: 'Temburong',
        arrival_country: 'Brunei',
        departure_date: '2022-04-28',
        departure_time: '7:38 AM',
        flight_duration: 5,
        ticket_price: 801.68
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
      .send({ departure_city: 'Malaysia' })
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/flights/${defaultEntityId}`)
      .send({ departure_city: 'Malaysia' })

    expect(res.body.data.departure_city).toEqual('Malaysia')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete('/flights/2')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
