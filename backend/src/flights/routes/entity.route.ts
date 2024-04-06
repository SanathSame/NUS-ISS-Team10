import Router from 'express'
import FlightController from '../controllers/entity.controller'

const FlightRouter = Router()
const flightControllerObject = new FlightController()

FlightRouter.get('/health', flightControllerObject.getHealthStatus)

// Create new app Entity
FlightRouter.post('/', flightControllerObject.createNewEntity)

// Get all app Entity
FlightRouter.get('/', flightControllerObject.getAllEntities)

// Get app Entity by id
FlightRouter.get('/:id', flightControllerObject.getEntityById)

// Update app Entity by id
FlightRouter.patch('/:id', flightControllerObject.updateEntityById)

// Get app Entity by id
FlightRouter.delete('/:id', flightControllerObject.deleteEntityById)

export default FlightRouter
