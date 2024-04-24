import Router from 'express'
import EntityController from '../controllers/entity.controller'

const ItineraryRouter = Router()
const entityControllerObject = new EntityController()

ItineraryRouter.get('/health', entityControllerObject.getHealthStatus)

// Create new app Entity
ItineraryRouter.post('/', entityControllerObject.createNewEntity)

// Get all app Entity
ItineraryRouter.get('/', entityControllerObject.getAllEntities)

// Get app Entity by id
ItineraryRouter.get('/:id', entityControllerObject.getEntityById)

// Update app Entity by id
ItineraryRouter.patch('/:id', entityControllerObject.updateEntityById)

// Get app Entity by id
ItineraryRouter.delete('/:id', entityControllerObject.deleteEntityById)

export default ItineraryRouter
