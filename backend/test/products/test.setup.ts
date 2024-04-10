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
  const productObject = app.get('product-database').getDbObject()
  productObject.one("INSERT INTO products (_id, name, description, price, quantity, created_at) VALUES ('6591464efc13ae0a31fa20b9', 'Cold Head Congestion Daytime Non-Drowsy', 'Integer a nibh. In quis justo.', 29.61, 95, '2023-12-28 15:56:58'), ('6591464efc13ae0a31fa20ba', 'North Cough Drop', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 12.37, 9, '2023-08-08 17:50:59')")
})

const afterEachFunction = afterEach(async () => {
  const productObject = app.get('product-database').getDbObject()
  productObject.one('DELETE from products')
})

const afterAllFunction = afterAll(async () => {
  await server.close()
})

export { app, defaultEntityId, beforeAllFunction, beforeEachFunction, afterEachFunction, afterAllFunction }
