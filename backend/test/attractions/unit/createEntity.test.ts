import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../../test.setup'

describe('POST /attractions/', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/attractions/')
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
      .post('/attractions/')
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
})