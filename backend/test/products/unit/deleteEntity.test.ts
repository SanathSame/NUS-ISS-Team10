import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('DELETE /products/:id', () => {
  test('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/products/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
