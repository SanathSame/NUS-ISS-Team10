import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { SampleEntities } from '../data/entities.sample'

import * as TestSetup from '../../test.setup'

const defaultEntityId: string = '65757316fc13ae561bfa20eb'

describe('/users/', () => {
  test('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(TestSetup.app)
      .get('/users/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/users/')
      .send({
        email: 'aa@bb.com',
        username: 'testing',
        password: 'hello123'
      })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/users/')
      .send({
        email: 'aa@bb.com',
        username: 'testing',
        password: 'hello123'
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
      .get(`/users/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the email of the entity requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/users/${defaultEntityId}`)

    expect(res.body.data.username).toEqual(SampleEntities[0].username)
  })

  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/users/${defaultEntityId}`)
      .send({ username: 'imelda' })

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated attribute if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/users/${defaultEntityId}`)
      .send({ username: 'imelda' })

    expect(res.body.data.username).toEqual('imelda')
  })

  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete('/users/65757316fc13ae561bfa20ec')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
