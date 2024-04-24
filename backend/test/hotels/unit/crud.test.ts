import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

const defaultEntityId: string = '661609ebfc13ae7ef9ab89f5'

describe('/hotels/', () => {
  test('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(TestSetup.app)
      .get('/hotels/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/hotels/')
      .send({
        name: 'Hotel AAAAXYZ',
        city: 'AnotherCity',
        country: 'AnotherCountry',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 200.00,
        ratings: 4.8,
        ammenities: 'Gym, Spa, Restaurant',
        hotel_image: 'https://example.com/hotel_image2.jpg'
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns error if missing properties added', async () => {
    const res: any = await request(TestSetup.app)
      .post('/hotels/')
      .send({
        country: 'AnotherCountry',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 200.00,
        ratings: 4.8,
        ammenities: 'Gym, Spa, Restaurant',
        hotel_image: 'https://example.com/hotel_image2.jpg'
      })

    expect(res.statusCode).toEqual(StatusCode.ServerErrorInternal)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/hotels/')
      .send({
        name: 'Hotel XASYZ',
        city: 'AnotherCity',
        country: 'AnotherCountry',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 200.00,
        ratings: 4.8,
        ammenities: 'Gym, Spa, Restaurant',
        hotel_image: 'https://example.com/hotel_image2.jpg'
      })

    expect(res.body.data._id).toBeDefined()
  })

  test('returns status code 200 if can fetch a list of existing entities', async () => {
    const res: any = await request(TestSetup.app)
      .get('/hotels/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of entities present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/hotels/')

    expect(res.body.data.length).toEqual(SampleEntities.length)
  })

  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/hotels/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the attribute of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/hotels/${defaultEntityId}`)

    expect(res.body.data.hotel_image).toEqual(SampleEntities[0].hotel_image)
  })

  test('returns status code 200 if it updates a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/hotels/${defaultEntityId}`)
      .send({ city: 'Malaysia' })
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/hotels/${defaultEntityId}`)
      .send({ ratings: 3.3 })

    expect(res.body.data.ratings).toEqual('3.3')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete('/hotels/123456789012345678901237')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
