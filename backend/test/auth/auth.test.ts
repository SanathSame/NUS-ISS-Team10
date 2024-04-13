import request from 'supertest'
import dotenv from 'dotenv'

import { StatusCode } from 'status-code-enum'
import * as TestSetup from '../test.setup'
import { JwtConstants } from '../../src/auth/constants/jwt.constants'
import jwt from 'jsonwebtoken'

dotenv.config()
const sampleValidRefreshToken = jwt.sign({ username: 'tom' }, JwtConstants.refresh.secret, { expiresIn: JwtConstants.refresh.expiresIn })
const sampleInvalidRefreshToken = 'lol'

describe('/auth/login', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/auth/login')
      .send({ username: 'shawn', password: '123456' })

    expect(res.statusCode).toEqual(StatusCode.SuccessAccepted)
  })

  test('returns status code 400 if it accepts a given entity with invalid details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/auth/login')
      .send({ username: 'shawn', password: '654321' })

    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns a deconstructable refresh token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/auth/login')
      .send({ username: 'shawn', password: '123456' })

    const tokenData: any = jwt.verify(res.body.data.refreshToken, JwtConstants.refresh.secret)

    expect(tokenData.username).toEqual('shawn')
  })

  test('returns a deconstructable access token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/auth/login')
      .send({ username: 'shawn', password: '123456' })

    const tokenData: any = jwt.verify(res.body.data.accessToken, JwtConstants.access.secret)
    expect(tokenData.username).toEqual('shawn')
  })

  test('returns status code 200 if valid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 400 if invalid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleInvalidRefreshToken}`)
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns status code 400 if no token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', 'Bearer')
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('can deconstruct an attribute from a returned accesstoken', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    const deconstructedToken: any = jwt.verify(res.body.data.accessToken, JwtConstants.access.secret)
    expect(deconstructedToken.username).toEqual('tom')
  })
})
