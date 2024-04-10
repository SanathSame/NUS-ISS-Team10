import { app } from '../index'

const port = 4010

const defaultEntityId: string = ''
let server: any

const beforeAllFunction = beforeAll(() => {
  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

const beforeEachFunction = beforeEach(async () => {

})

const afterEachFunction = afterEach(async () => {
})

const afterAllFunction = afterAll(async () => {
  await server.close()
})

export { app, defaultEntityId, beforeAllFunction, beforeEachFunction, afterEachFunction, afterAllFunction }
