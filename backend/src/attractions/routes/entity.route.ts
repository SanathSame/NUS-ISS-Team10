import Router from 'express'
import AttractionController from '../controllers/entity.controller'

const AttractionRouter = Router()
const attractionControllerObject = new AttractionController()

AttractionRouter.get('/health', attractionControllerObject.getHealthStatus)

// Create new app Entity
AttractionRouter.post('/', attractionControllerObject.createNewEntity)

// Get all app Entity
AttractionRouter.get('/', attractionControllerObject.getAllEntities)

// Get app Entity by id
AttractionRouter.get('/:id', attractionControllerObject.getEntityById)

// Update app Entity by id
AttractionRouter.patch('/:id', attractionControllerObject.updateEntityById)

// Get app Entity by id
AttractionRouter.delete('/:id', attractionControllerObject.deleteEntityById)

export default AttractionRouter