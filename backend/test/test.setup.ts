import { app } from './index'

const port = 4010

let productObject = app.get('product-database').getDbObject()

let server: any

const beforeAllFunction = beforeAll(() => {
  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

const beforeEachFunction = beforeEach(async () => {
  productObject.manyOrNone('DELETE from products RETURNING *')
  productObject.manyOrNone('DELETE from users RETURNING *')
  productObject.manyOrNone('DELETE FROM flights RETURNING *')
  productObject.manyOrNone('DELETE FROM attractions RETURNING *')

  productObject.one('INSERT INTO products (_id, name, description, price, quantity, created_at) VALUES ' +
  "('6591464efc13ae0a31fa20b9', 'Cold Head Congestion Daytime Non-Drowsy', 'Integer a nibh. In quis justo.', 29.61, 95, '2023-12-28 15:56:58') RETURNING *")
  productObject.one('INSERT INTO products (_id, name, description, price, quantity, created_at) VALUES ' +
  "('6591464efc13ae0a31fa20ba', 'North Cough Drop', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 12.37, 9, '2023-08-08 17:50:59') RETURNING *")

  productObject.one('INSERT INTO users (_id, username, password, email) VALUES ' +
  "('65757316fc13ae561bfa20eb', 'shawn', '$2b$10$Ruy9.sDl4u1GlpDGtXnqV.kG4Ao828Oy7a2P899QnzAaLpRPgnRP2', 'wlannin0@admin.ch') RETURNING *")
  productObject.one('INSERT INTO users (_id, username, password, email) VALUES ' +
  "('65757316fc13ae561bfa20ec', 'Neville', '$2a$04$VrmVSPIcSEgMV/kW6yo/GugiuIWDNAHYQEky0X6ic/eYyOrggKdMy', 'nlawlor1@dailymotion.com') RETURNING *")

  productObject.one('INSERT INTO attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction) VALUES ' +
  "('661609ebfc13ae7ef9ab89f5', 'Chatuchak Weekend Market', 'Yukhnov', 'Russia', 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl', 572.79, 2.2, '10:01 PM', 'Beaches and Islands') RETURNING *")
  productObject.one('INSERT INTO attractions (_id, name, city, country, description, price, ratings, opening_hours, type_of_attraction) VALUES ' +
  "('661609ebfc13ae7ef9ab89f6', 'Bora Bora', 'Sitovo', 'Bulgaria', 'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere', 522.81, 9.9, '12:23 PM', 'Markets and Bazaars') RETURNING *")

  productObject.one('INSERT INTO flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) VALUES ' +
  "('1', 'Jakarta Indonesia', 'Pattaya Thailand', '2022-04-28', '7:38 AM', 5, 801.68) RETURNING *")
  productObject.one('INSERT INTO flights (_id, departure_city, arrival_city, departure_date, departure_time, flight_duration, ticket_price) VALUES ' +
  "('2', 'Singapore Singapore', 'Penang Malaysia', '2022-06-07', '11:54 PM', 18, 267.36) RETURNING *")
})

const afterEachFunction = afterEach(async () => {
  await productObject.manyOrNone('DELETE FROM products RETURNING *')
  await productObject.manyOrNone('DELETE FROM users RETURNING *')
  await productObject.manyOrNone('DELETE FROM flights RETURNING *')
  await productObject.manyOrNone('DELETE FROM attractions RETURNING *')
})

const afterAllFunction = afterAll(async () => {
  await server.close()
})

export { app, beforeAllFunction, beforeEachFunction, afterEachFunction, afterAllFunction }
