import Router from 'express'
import EntityController from '../controllers/entity.controller'

const IteneraryRouter = Router()
const entityControllerObject = new EntityController()

IteneraryRouter.get('/health', entityControllerObject.getHealthStatus)

// Create new app Entity
IteneraryRouter.post('/', entityControllerObject.createNewEntity)

// Get all app Entity
IteneraryRouter.get('/', entityControllerObject.getAllEntities)

// Get app Entity by id
IteneraryRouter.get('/:id', entityControllerObject.getEntityById)

// Update app Entity by id
IteneraryRouter.patch('/:id', entityControllerObject.updateEntityById)

// Get app Entity by id
IteneraryRouter.delete('/:id', entityControllerObject.deleteEntityById)

export default IteneraryRouter
