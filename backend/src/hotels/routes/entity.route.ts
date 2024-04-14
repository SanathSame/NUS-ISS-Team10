import Router from 'express'
import HotelController from '../controllers/entity.controller'

const HotelRouter = Router()
const hotelControllerObject = new HotelController()

HotelRouter.get('/health', hotelControllerObject.getHealthStatus)

// Create new app Entity
HotelRouter.post('/', hotelControllerObject.createNewEntity)

// Get all app Entity
HotelRouter.get('/', hotelControllerObject.getAllEntities)

// Get app Entity by id
HotelRouter.get('/:id', hotelControllerObject.getEntityById)

// Update app Entity by id
HotelRouter.patch('/:id', hotelControllerObject.updateEntityById)

// Get app Entity by id
HotelRouter.delete('/:id', hotelControllerObject.deleteEntityById)

export default HotelRouter
