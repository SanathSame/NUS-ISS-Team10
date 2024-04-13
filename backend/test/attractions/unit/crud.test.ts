import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

const defaultEntityId: string = '661609ebfc13ae7ef9ab89f5'

describe('/attractions/', () => {
  test('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(TestSetup.app)
      .get('/attractions/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/attractions/')
      .send({
        name: 'wakandiii',
        city: 'Singapore',
        description: 'Integer a nibh. In quis justo.',
        price: 29.61,
        ratings: 5,
        opening_hours: '10:01 PM',
        type_of_attraction: 'Beaches and Islands'
      })

    console.log(res.body)

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/attractions/')
      .send({
        name: 'wakanda',
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
      .get('/attractions/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of entities present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/attractions/')

    expect(res.body.data.length).toEqual(SampleEntities.length)
  })

  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/attractions/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the attribute of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/attractions/${defaultEntityId}`)

    expect(res.body.data.opening_hours).toEqual(SampleEntities[0].opening_hours)
  })

  test('returns status code 200 if it updates a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/attractions/${defaultEntityId}`)
      .send({ city: 'Malaysia' })
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/attractions/${defaultEntityId}`)
      .send({ ratings: 3.3 })

    console.log(res.body)

    expect(res.body.data.ratings).toEqual('3.3')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/attractions/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
