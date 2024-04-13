import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../../test.setup'

describe('PATCH /attractions/:id', () => {
  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/attractions/${TestSetup.defaultEntityId}`)
      .send({ city: 'Malaysia' })
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated password if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/attractions/${TestSetup.defaultEntityId}`)
      .send({ city: 'Malaysia' })

    expect(res.body.data.city).toEqual('Malaysia')
  })
})
