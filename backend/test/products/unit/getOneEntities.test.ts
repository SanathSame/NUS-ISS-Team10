import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'
import { SampleEntities } from '../data/entities.sample'

describe('GET /products/:id', () => {
  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/products/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the email of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/products/${TestSetup.defaultEntityId}`)

    expect(res.body.data.quantity).toEqual(SampleEntities[0].quantity)
  })
})
